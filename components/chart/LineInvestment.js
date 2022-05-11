import { Line } from "react-chartjs-2";

function LineInvestment({ investmentData }) {
    const data = {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
            {
                label: "Youtube",
                data: investmentData.data,
                backgroundColor: "rgba(111, 78, 242, 0.10)",
                borderColor: "rgba(111, 78, 242, 1)",
                // lineTension: 0,
                pointRadius: 5,
                borderWidth: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            animateRotate: true,
            animateScale: true,
        },
        tooltips: {
            enabled: false,
        },
        legend: {
            display: false,
            labels: {
                usePointStyle: false,
            },
        },
        scales: {
            xAxes: [
                {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    scaleLabel: {
                        display: false,
                        labelString: "Month",
                    },
                },
            ],
            yAxes: [
                {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    scaleLabel: {
                        display: false,
                        labelString: "Value",
                    },
                },
            ],
        },
    };
    return (
        <>
            <Line
                data={data}
                height={150}
                options={options}
                id="transaction-graph"
            />
        </>
    );
}
export default LineInvestment;
