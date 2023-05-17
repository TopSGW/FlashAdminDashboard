import { useLayoutEffect } from "react"

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";

export default function OverviewAffiliatorDoughnut(props:any){
    const chartID = props.chartID
    useLayoutEffect(()=>{
        let root = am5.Root.new(chartID);
        root.setThemes([
            am5themes_Animated.new(root)
          ]);
          let chart = root.container.children.push(am5percent.PieChart.new(root, {
            layout: root.verticalLayout,
            innerRadius: am5.percent(50)
          }));
          
          
          // Create series
          // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
          let series = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            alignLabels: false
          }));
          
          series.labels.template.setAll({
            textType: "circular",
            centerX: 0,
            centerY: 0
          });
          
          
          // Set data
          // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
          series.data.setAll([
            { value: 4, category: "Sumsung smart TV" },
            { value: 3, category: "Sony 75 Inch" },
            { value: 1, category: "Acer Aspire Desktop" },
          ]);
          
          series.labels.template.set("visible", false);
          series.ticks.template.set("visible", false);
          
          // Create legend
          // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
          let legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            marginTop: 15,
            marginBottom: 15,
          }));
          
          legend.data.setAll(series.dataItems);
          
          
          // Play initial series animation
          // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
          series.appear(1000, 100);
          return () => {root.dispose(); };
    },[chartID])
    return(
        <div id={chartID} style={{width: "100%"}} className="h-[300px] sm:h-[500px]"></div>
    )
}