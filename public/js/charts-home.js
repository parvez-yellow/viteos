/*global $, document, Chart, LINECHART, data, options, window*/
$(document).ready(function () {

    'use strict';

    // Main Template Color
    var brandPrimary = '#33b35a';

    var limit = 6;
    // ------------------------------------------------------- //
    // Line Chart
    // ------------------------------------------------------ //
    var LINECHART = $('#lineCahrt');
    var myLineChart = new Chart(LINECHART, {
        type: 'line',
        options: {
            legend: {
                display: false
            }
        },
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(77, 193, 75, 0.4)",
                    borderColor: brandPrimary,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: brandPrimary,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [17, 14, 7.8, 8, 11, 22, 14],
                    spanGaps: false
                },
                {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [14, 13, 15, 19, 9, 12, 16],
                    spanGaps: false
                }
            ]
        }
    });


    // ------------------------------------------------------- //
    // Pie Chart
    // ------------------------------------------------------ //
    var PIECHART = $('#pieChart');
    var myPieChart = new Chart(PIECHART, {
        type: 'doughnut',
        data: {
            labels: [
                "Full",
                "Empty",
            ],
            datasets: [
                {
                    data: [limit, 14-limit],
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        brandPrimary,
                        "red"

                    ],
                    hoverBackgroundColor: [
                        brandPrimary,
                        "red"
                    ]
                }]
        }
    });

});
