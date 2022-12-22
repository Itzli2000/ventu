import { Button, Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface IChartProps {
  title: string;
  action: () => void;
  color?: 0 | 1;
}

const Chart: React.FC<IChartProps> = ({ title, action, color = 1 }) => {
  const [firstDataset, setFirstDataset] = useState(
    Array.from({ length: 6 }, () => Math.floor(Math.random() * 40000))
  );
  const [secondDataset, setSecondDataset] = useState(
    Array.from({ length: 6 }, () => Math.floor(Math.random() * 40000))
  );

  const [chartColors] = useState([
    ["#4DB6AC", "#d8f7f4"],
    ["#F99746", "#f7cfae"],
  ]);

  var options = {
    type: "bar",
    data: {
      labels: ["1", "2", "3", "4", "5", "6"],
      datasets: [
        {
          label: "Dataset 1",
          data: firstDataset,
          backgroundColor: chartColors[color][0],
          xAxisID: "x2",
          barThickness: 30,
        },
        {
          label: "Dataset 2",
          data: secondDataset,
          backgroundColor: chartColors[color][1],
          xAxisID: "x",
          barThickness: 50,
        },
      ],
    },
    options: {
      scales: {
        x: { display: false },
        x2: {
          offset: true,
          stacked: true,
          display: false,
        },
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstDataset(
        Array.from({ length: 6 }, () => Math.floor(Math.random() * 40000))
      );
      setSecondDataset(
        Array.from({ length: 6 }, () => Math.floor(Math.random() * 40000))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Paper sx={{ padding: "1rem" }}>
      <Grid2 container>
        <Grid2 xs={8}>
          <Typography>{title}</Typography>
        </Grid2>
        <Grid2 xs={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" size="small" onClick={action}>
            View All
          </Button>
        </Grid2>
      </Grid2>
      <Bar options={options.options} data={options.data} />
    </Paper>
  );
};

export default Chart;
