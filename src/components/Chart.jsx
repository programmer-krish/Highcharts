/**
 * Description - converted them into hooks
 */


import React, { useState, useEffect, useRef } from "react";
import HighchartsReact from "highcharts-react-official";

// class Chart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0 };
//     this.exportChart = () => {
//       this.chart.exportChart();
//     };
//   }
//   componentDidMount() {
//     this.chart = this.refs.chart.chart;
//   }

//   render() {
//     return (
//       <div>
//         <HighchartsReact
//           highcharts={this.props.highcharts}
//           constructorType={"chart"}
//           options={this.props.options}
//           ref={"chart"}
//         />
//         <button onClick={this.exportChart}>Export</button>
//       </div>
//     );
//   }
// }

// export default Chart;
export default function Chart(props) {
  const [chart, setChart] = useState(null);
  const chartRef = useRef();
  const exportChart = () => {
    chart.exportChart({
      type: "application/pdf",
      filename: "my-pdf"
    });
  };

  useEffect(() => {
    setChart(chartRef.current.chart);
  }, []);

  console.log("chart", chart);
  console.log("chartRef", chartRef);
  return (
    <div className="highchart">
      <HighchartsReact
        highcharts={props.highcharts}
        constructorType={"chart"}
        options={props.options}
        ref={chartRef}
      />
      <button className="btn-download" onClick={exportChart}>
        Export
      </button>
    </div>
  );
}
