import {
    Chart as ChartJS,
    BarElement,
    Tooltip,
    CategoryScale,
    LinearScale,
    Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import { Card } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

ChartJS.register(BarElement, Tooltip, CategoryScale, LinearScale, Legend);

export default function Barchart() {
    const data = {
        labels: ["one", "two", "three"],
        datasets: [
            {
                data: [3, 5, 7],
                label: "Mobile",
                backgroundColor: "green",
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 100,
                categorySpacing: 5,
                barPercentage: 0.1,
            },
            {
                data: [6, 10, 10],
                label: "Desktop",
                backgroundColor: "yellow",
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 100,
                categorySpacing: 5,
                barPercentage: 0.1,
            },
        ],
    };
    const options = {
        scales: {
            x: {
                stacked: true,
                xAxes: [
                    {
                        barValueSpacing: 0.1,
                        barDatasetSpacing: 0.1,
                    },
                ],
            },

            y: {
                beginAtZero: true,
            },
        },
    };
    return (
        <Card>
            <div className="grid w-full grid-cols-2">
                <div className="text-md justify-self-start m-2 font-semibold">
                    Languages
                </div>
                <MoreVertIcon className="justify-self-end m-2" />
            </div>
            <Bar style={{ width: "500px" }} data={data} options={options}></Bar>
        </Card>
    );
}
