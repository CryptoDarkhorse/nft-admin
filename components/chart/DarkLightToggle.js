import { Bar } from "react-chartjs-2";

function StackedBarChart() {
    const data = {
        labels: [
            "4 Jan",
            "5 Jan",
            "6 Jan",
            "7 Jan",
            "8 Jan",
            "9 Jan",
            "10 Jan",
        ],
        datasets: [
            {
                label: "Youtube",
                backgroundColor: "#1652F0",
                borderColor: "transparent",
                data: [35, 65, 52, 115, 98, 185, 125],
                lineTension: 0,
                pointRadius: 0,
                borderWidth: 2,
            },
            {
                label: "Facebook",
                backgroundColor: "#f73164",
                borderColor: "transparent",
                data: [40, 105, 92, 155, 138, 205, 165],
                lineTension: 0,
                // borderDash: [10, 5],
                borderWidth: 1,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [
                {
                    stacked: true,
                    barPercentage: 0.63,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        fontColor: "#8a909d",
                    },
                },
            ],
            yAxes: [
                {
                    stacked: true,
                    gridLines: {
                        display: true,
                        color: "#eee",
                    },
                    ticks: {
                        stepSize: 50,
                        fontColor: "#8a909d",
                    },
                },
            ],
        },
        tooltips: {
            mode: "index",
            intersect: false,
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 15,
            backgroundColor: "rgba(256,256,256,0.95)",
            displayColors: true,
            xPadding: 10,
            yPadding: 7,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2,
            caretSize: 6,
            caretPadding: 5,
        },
    };
    return (
        <>
            <Bar data={data} height={150} options={options} id="activityBar" />
        </>
    );
}
export default StackedBarChart;
