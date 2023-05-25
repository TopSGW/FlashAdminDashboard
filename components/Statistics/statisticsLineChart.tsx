/** @format */

import { useLayoutEffect } from 'react';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import { OverviewLineChartInterface } from 'components/Overview/overviewLineChart';
import { RecordCountDailyType } from 'components/Overview/type';
type ChartDataType = {
	date: number;
	sales: number;
};
export default function StatisticsLineChart({
	chartData,
	_chartId,
}: OverviewLineChartInterface) {
	const chartId = _chartId;

	useLayoutEffect(() => {
		let root = am5.Root.new(chartId);
		root.setThemes([am5themes_Animated.new(root)]);

		let chart = root.container.children.push(
			am5xy.XYChart.new(root, {
				focusable: true,
				panX: false,
				panY: false,
				wheelX: 'panX',
				wheelY: 'zoomX',
				pinchZoomX: true,
			})
		);
		let easing = am5.ease.linear;
		// Add cursor
		// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
		let cursor = chart.set(
			'cursor',
			am5xy.XYCursor.new(root, {
				behavior: 'zoomX',
			})
		);
		cursor.lineY.set('visible', false);

		function generateRealData(item: RecordCountDailyType): ChartDataType {
			const date = new Date(item._id.year, item._id.month, item._id.day);
			return {
				date: date.getTime(),
				sales: item.count,
			};
		}
		function generateReldatas(datas: RecordCountDailyType[]): ChartDataType[] {
			const result = datas.map((item) => generateRealData(item));
			return result;
		}

		// Create axes
		// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
		let xAxis = chart.xAxes.push(
			am5xy.DateAxis.new(root, {
				groupData: true,
				maxDeviation: 0,
				baseInterval: {
					timeUnit: 'day',
					count: 1,
				},
				renderer: am5xy.AxisRendererX.new(root, {}),
				tooltip: am5.Tooltip.new(root, {}),
			})
		);

		let yAxis = chart.yAxes.push(
			am5xy.ValueAxis.new(root, {
				renderer: am5xy.AxisRendererY.new(root, {}),
			})
		);

		// Add series
		// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
		let data = generateReldatas(chartData);
		let series = chart.series.push(
			am5xy.LineSeries.new(root, {
				name: 'Series',
				xAxis: xAxis,
				yAxis: yAxis,
				valueYField: 'sales',
				valueXField: 'date',
				tooltip: am5.Tooltip.new(root, {
					labelText: '{valueY}',
				}),
			})
		);
		series.fills.template.setAll({
			fillOpacity: 0.2,
			visible: true,
		});

		// Add scrollbar
		// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
		let scrollbar = am5xy.XYChartScrollbar.new(root, {
			orientation: 'horizontal',
			height: 50,
		});
		chart.set('scrollbarX', scrollbar);

		let sbxAxis = scrollbar.chart.xAxes.push(
			am5xy.DateAxis.new(root, {
				groupData: true,
				groupIntervals: [{ timeUnit: 'month', count: 1 }],
				baseInterval: { timeUnit: 'day', count: 1 },
				renderer: am5xy.AxisRendererX.new(root, {
					opposite: false,
					strokeOpacity: 0,
				}),
			})
		);

		let sbyAxis = scrollbar.chart.yAxes.push(
			am5xy.ValueAxis.new(root, {
				renderer: am5xy.AxisRendererY.new(root, {}),
			})
		);

		let sbseries = scrollbar.chart.series.push(
			am5xy.LineSeries.new(root, {
				xAxis: sbxAxis,
				yAxis: sbyAxis,
				valueYField: 'value',
				valueXField: 'date',
			})
		);

		series.data.setAll(data);
		sbseries.data.setAll(data);

		// Make stuff animate on load
		// https://www.amcharts.com/docs/v5/concepts/animations/
		series.appear(1000);
		chart.appear(1000, 100);
		return () => {
			root.dispose();
		};
	}, [chartId]);

	return (
		<div
			id={chartId}
			style={{ width: '100%' }}
			className='h-[300px] sm:h-[500px]'
		></div>
	);
}
