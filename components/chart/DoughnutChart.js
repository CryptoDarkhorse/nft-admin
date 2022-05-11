import { Pie } from "react-chartjs-2";

function DoughnutChart({ doughnutData }) {
    const data = {
        datasets: [
            {
                data: doughnutData.data,
                backgroundColor: [
                    "rgba(111, 78, 242,1)",
                    // "rgba(111, 78, 242,0.5)",
                    "rgba(111, 78, 242,0.10)",
                ],
            },
        ],
        labels: ["Artwork Sold", "Artwork Cancel"],
    };

    const options = {
        responsive: true,
        cutoutPercentage: 80,
        maintainAspectRatio: false,
        clip: 10,
        animation: {
            animateRotate: true,
            animateScale: true,
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                usePointStyle: true,
                fontFamily: "Poppins",
                fontSize: 12,
                fontColor: "#464a53",
                padding: 20,
            },
        },
    };
    return (
        <>
            <Pie
                data={data}
                height={150}
                options={options}
                id="most-selling-items"
            />
            
        </>
    );
}
export default DoughnutChart;
