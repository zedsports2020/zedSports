/*=========================================================================================
    File Name: line-area.js
    Description: Chartjs line area chart
    ----------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Theme
    Version: 1.2
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Line area chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#area-chart");

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'No. of Orders'
                }
            }]
        }
    };

    // Chart Data
    var chartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Delivered",
            data: [0, 150, 140, 105, 190, 230, 270],
            backgroundColor: "rgba(100,157,274,.3)",
            borderColor: "transparent",
            pointBorderColor: "#C9BBAE",
            pointBackgroundColor: "#00BCD4",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        }, {
            label: "Initiated",
            data: [0, 90, 120, 240, 140, 250, 190],
            backgroundColor: "rgba(29,233,182,.6)",
            borderColor: "transparent",
            pointBorderColor: "#1DE9B6",
            pointBackgroundColor: "#FF5722",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        },{
            label: "Comleted",
            data: [70, 130, 90, 180, 260, 250, 100],
            backgroundColor: "rgba(250,233,182,.6)",
            borderColor: "transparent",
            pointBorderColor: "#1DE9B6",
            pointBackgroundColor: "#009688",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        }]
    };

    var config = {
        type: 'line',

        // Chart Options
        options : chartOptions,

        // Chart Data
        data : chartData
    };

    // Create the chart
    var areaChart = new Chart(ctx, config);

});