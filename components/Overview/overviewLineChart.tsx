import { useLayoutEffect } from "react"

import am5themes_Animated from "../../node_modules/@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy"

import * as am5percent from "@amcharts/amcharts5/percent";

export default function OverviewLineChart(props:any){
    const chartId = props.chartId

    useLayoutEffect(()=>{
    //var root = am5.Root.new("chartdiv2");
        var root = am5.Root.new(chartId);

        const name = ["Revenue", "Orders"]

        root.setThemes([
            am5themes_Animated.new(root)
          ]);
          
          
          // Create chart
          // https://www.amcharts.com/docs/v5/charts/xy-chart/
          let chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
            maxTooltipDistance: 0,
            pinchZoomX:true
          }));
          
          
          let date = new Date();
          date.setHours(0, 0, 0, 0);
          let value = 100;
          
          function generateData() {
            value = Math.round((Math.random() * 10 - 4.2) + value);
            am5.time.add(date, "day", 1);
            return {
              date: date.getTime(),
              value: value
            };
          }
          
          function generateDatas(count:any) {
            let data = [];
            for (var i = 0; i < count; ++i) {
              data.push(generateData());
            }
            return data;
          }
          
          
          // Create axes
          // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
          let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
            maxDeviation: 0.2,
            baseInterval: {
              timeUnit: "day",
              count: 1
            },
            renderer: am5xy.AxisRendererX.new(root, {}),
            tooltip: am5.Tooltip.new(root, {})
          }));
          
          let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererY.new(root, {})
          }));
          
          
          // Add series
          // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
          for (var i = 0; i < 2; i++) {
            let series = chart.series.push(am5xy.LineSeries.new(root, {
              name: name[i],
              xAxis: xAxis,
              yAxis: yAxis,
              valueYField: "value",
              valueXField: "date",
              tooltip: am5.Tooltip.new(root, {
                pointerOrientation: "horizontal",
                labelText: "{valueY}"
              }),
            }));
          
            date = new Date();
            date.setHours(0, 0, 0, 0);
            value = 0;
          
            let data = generateDatas(100);
            series.data.setAll(data);
          
            // Make stuff animate on load
            // https://www.amcharts.com/docs/v5/concepts/animations/
            series.appear();
          }
          
          
          // Add cursor
          // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
          let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
            behavior: "none"
          }));
          cursor.lineY.set("visible", false);
          
          
          // Add scrollbar
          // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
          chart.set("scrollbarX", am5.Scrollbar.new(root, {
            orientation: "horizontal"
          }));
          
          chart.set("scrollbarY", am5.Scrollbar.new(root, {
            orientation: "vertical"
          }));
          
          
          // Add legend
          // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
          let legend = chart.children.push(am5.Legend.new(root, {
            y: am5.percent(0),
            centerY: am5.percent(50),
            x: am5.percent(50),
            centerX: am5.percent(50),
            layout: root.horizontalLayout,
            paddingBottom:15,
            width: 200,
          }));
          
          // When legend item container is hovered, dim all the series except the hovered one
          legend.itemContainers.template.events.on("pointerover", function(e) {
            let itemContainer:any = e.target;
          
            // As series list is data of a legend, dataContext is series
            let series = itemContainer.dataItem.dataContext;
          
            chart.series.each(function(chartSeries:any) {
              if (chartSeries != series) {
                chartSeries.strokes.template.setAll({
                  strokeOpacity: 0.9,
                  stroke: am5.color(0xffffff)
                });
              } else {
                chartSeries.strokes.template.setAll({
                  strokeWidth: 3
                });
              }
            })
          })
          
          // When legend item container is unhovered, make all series as they are
          legend.itemContainers.template.events.on("pointerout", function(e) {
            let itemContainer:any = e.target;
            let series = itemContainer.dataItem.dataContext;
          
            chart.series.each(function(chartSeries:any) {
              chartSeries.strokes.template.setAll({
                strokeOpacity: 1,
                strokeWidth: 1,
                stroke: chartSeries.get("fill")
              });
            });
          })
          
          legend.itemContainers.template.set("width", am5.p100);
          legend.valueLabels.template.setAll({
            width: am5.p100,
            textAlign: "right"
          });
          
          // It's is important to set legend data after all the events are set on template, otherwise events won't be copied
          legend.data.setAll(chart.series.values);
          
          // legend.data.setAll([{
          //   name: "Revenue",
          //   color: am5.color(0x297373)
          // }, {
          //   name: "Orders",
          //   color: am5.color(0xff621f)
          // }]);
          
          // Make stuff animate on load
          // https://www.amcharts.com/docs/v5/concepts/animations/
          chart.appear(1000, 100);        
          return () => {root.dispose(); };
    },[chartId])
    return(
        <div id={chartId} style={{width: "100%"}} className="h-[300px] sm:h-[500px]"></div>
    )
}
