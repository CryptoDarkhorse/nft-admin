import { Line } from "react-chartjs-2";

function LineChart({lineData}) {
    const data = {
        labels: [
            "4 Jan",
            "5 Jan",
            "6 Jan",
            "7 Jan",
            "8 Jan",
            "9 Jan",
            "10 Jan",
            "11 Jan",
            "12 Jan",
            "13 Jan",
            "14 Jan",
            "15 Jan",
        ],
        datasets: [
            {
                label: `$`,
                backgroundColor: "rgba(111, 78, 242, 0.10)",
                borderColor: "rgba(111, 78, 242, 1)",
                data: lineData.facebook,
                lineTension: 0,
                pointRadius: 4,
                borderWidth: 4,
            },
            // {
            //     label: "Facebook",
            //     backgroundColor: "rgba(111, 78, 242, 0.5)",
            //     borderColor: "transparent",
            //     data: lineData.youtube,
            //     lineTension: 0,
            //     // borderDash: [10, 5],
            //     borderWidth: 1,
            //     pointRadius: 0,
            // },
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
                    barPercentage: 0.45,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false,
                        // fontColor: "#8a909d",
                    },
                },
            ],
            yAxes: [
                {
                    stacked: true,
                    gridLines: {
                        display: false,
                        color: "#eee",
                    },
                    ticks: {
                        // display: false,
                        stepSize: 50,
                        fontColor: "#6f4ef2",
                        fontFamily: "Poppins",
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
            <Line data={data} height={150} options={options} id="activity" />
        </>
    );
}
export default LineChart;
