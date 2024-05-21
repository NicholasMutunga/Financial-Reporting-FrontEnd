import { Component, OnInit } from '@angular/core';
// import {
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexDataLabels,
//   ApexStroke,
//   ApexMarkers,
//   ApexYAxis,
//   ApexGrid,
//   ApexTitleSubtitle,
//   ApexTooltip,
//   ApexLegend,
//   ApexFill,
//   ApexResponsive,
// } from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   stroke: ApexStroke;
//   dataLabels: ApexDataLabels;
//   markers: ApexMarkers;
//   colors: string[];
//   yaxis: ApexYAxis;
//   grid: ApexGrid;
//   legend: ApexLegend;
//   tooltip: ApexTooltip;
//   fill: ApexFill;
//   title: ApexTitleSubtitle;
//   responsive: ApexResponsive[];
//   labels: any;
//   plotOptions: any;
// };

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // public performanceRateChartOptions: Partial<ChartOptions>;
  // public supplierChartOptions: Partial<ChartOptions>;
  // public lineChartOptions: Partial<ChartOptions>;
  // public pieChartOptions: any;
  // public plotOptions: any;
  // //  color: ["#3FA7DC", "#F6A025", "#9BC311"],
  // count: ['0']


  constructor() { }
  ngOnInit() {
    // this.currentUser = this.tokenCookieService.getUser().username;
    // this.chart1();
    // this.chart2();
  }
  //performance-line chart
  // private chart1() {
  //   this.lineChartOptions = {
  //     series: [
  //       {
  //         name: "Peter",
  //         data: [70, 10, 40, 60],
  //       },
  //       {
  //         name: "Liam",
  //         data: [80, 90, 30, 50],
  //       },
  //       {
  //         name: "Waka",
  //         data: [85, 70, 85, 40],
  //       }
  //     ],
  //     chart: {
  //       height: 350,
  //       type: "line",
  //       foreColor: "#9aa0ac",
  //       dropShadow: {
  //         enabled: true,
  //         color: "#000",
  //         top: 18,
  //         left: 7,
  //         blur: 10,
  //         opacity: 0.2,
  //       },
  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     colors: ["#A5A5A5", "#875692", "#4CB5AC"],
  //     stroke: {
  //       curve: "smooth",
  //     },
  //     grid: {
  //       row: {
  //         colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
  //         opacity: 0.5,
  //       },
  //     },
  //     markers: {
  //       size: 1,
  //     },
  //     xaxis: {
  //       categories: [
  //         "Jan",
  //         "Feb",
  //         "Mar",
  //         "Apr",
  //         "May",
  //         "Jun",
  //         "Jul",
  //         "Aug",
  //         "Sept",
  //         "Oct",
  //         "Nov",
  //         "Dec",

  //       ],
  //       title: {
  //         text: "Months of the Year (2024)",
  //       },
  //     },
  //     yaxis: {
  //       // opposite: true,
  //       title: {
  //         text: "Tasks Completed (%)",
  //       },
  //     },
  //     legend: {
  //       position: "top",
  //       horizontalAlign: "right",
  //       floating: true,
  //       offsetY: -25,
  //       offsetX: -5,
  //     },
  //     tooltip: {
  //       theme: "dark",
  //       marker: {
  //         show: true,
  //       },
  //       x: {
  //         show: true,
  //       },
  //     },
  //   };
  // }

  //piechart
  // private chart2() {
  //   this.pieChartOptions = {
  //     series: [
  //       33, 55, 12
  //     ],

  //     chart: {
  //       type: "pie",
  //       width: 350,
  //     },
  //     legend: {
  //       position: "bottom",
  //       horizontalAlign: "left",
  //       floating: false,
  //       show: true,
  //     },
  //     dataLabels: {
  //       enabled: true,
  //     },
  //     labels: [
  //       'Fixed assets', 'Liquid assets', ''
  //     ],


  //     responsive: [
  //       {
  //         breakpoint: 480,
  //         options: {},
  //       },

  //     ],
  //   };
  // }
  //Line chart-invoice
  // private chart4() {
  //   this.performanceRateChartOptions = {
  //     series: [
  //       {
  //         name: "Average Delivery",
  //         data: [0, 20, 12, 6, 15, 25, 0],
  //       },
  //     ],
  //     chart: {
  //       height: 380,
  //       type: "line",
  //       dropShadow: {
  //         enabled: true,
  //         color: "#000",
  //         top: 18,
  //         left: 7,
  //         blur: 10,
  //         opacity: 0.2,
  //       },
  //       foreColor: "#9aa0ac",
  //       toolbar: {
  //         show: false,
  //       },
  //     },

  //     legend: {
  //       position: "top",
  //       horizontalAlign: "left",
  //       floating: true,
  //       offsetY: -25,
  //       offsetX: -5,
  //     },

  //     colors: ["#545454"],
  //     dataLabels: {
  //       enabled: true,
  //     },
  //     stroke: {
  //       curve: "smooth",
  //     },
  //     markers: {
  //       size: 2,
  //     },
  //     xaxis: {
  //       categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  //       title: {
  //         text: "Weekday",
  //       },
  //     },
  //     yaxis: {
  //       title: {
  //         text: "Average Delivery",
  //       },
  //     },
  //     tooltip: {
  //       theme: "dark",
  //       marker: {
  //         show: true,
  //       },
  //       x: {
  //         show: true,
  //       },
  //     },
  //   };
  // }
  // //Barchart
  // private chart3() {
  //   this.supplierChartOptions = {
  //     series: [
  //       {
  //         name: "Sales",
  //         data: [70],
  //       },
  //       {
  //         name: "Stocks",
  //         data: [120],
  //       },
  //       {
  //         name: "Expenses",
  //         data: [85],
  //       },
  //       {
  //         name: "Assets",
  //         data: [30],
  //       },
  //     ],
  //     chart: {
  //       height: 350,
  //       type: "bar",
  //       foreColor: "#9aa0ac",
  //       dropShadow: {
  //         enabled: true,
  //         color: "#000",
  //         top: 18,
  //         left: 7,
  //         blur: 10,
  //         opacity: 0.2,
  //       },
  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     colors: ["#A5A5A5", "#875692", "#4CB5AC"],
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: false,  // Set to true if you want horizontal bars
  //         columnWidth: "50%", // Adjust bar width as needed
  //         borderRadius: 4,    // Adjust bar radius as needed

  //       },
  //     },

  //     grid: {
  //       row: {
  //         colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
  //         opacity: 0.5,
  //       },
  //     },

  //     xaxis: {
  //       categories: [
  //         "2017", "2018", "2019", "2020"
  //       ],
  //       title: {
  //         text: "Yearly Analysis",
  //       },
  //     },
  //     yaxis: {
  //       // opposite: true,
  //       title: {
  //         text: "Revenue & Expenses ('000000)",
  //       },
  //     },
  //     legend: {
  //       position: "bottom",
  //       floating: true,
  //       offsetY: -25,
  //       offsetX: -5,
  //     },
  //     tooltip: {
  //       theme: "dark",
  //       marker: {
  //         show: true,
  //       },
  //       x: {
  //         show: false,
  //       },
  //     },
  //   };
  // }
}

