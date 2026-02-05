import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

export default function VehicleChart({ vehicles }) {
  const statusCount = vehicles.reduce(
    (acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    },
    {
      tersedia: 0,
      dipakai: 0,
      servis: 0,
    }
  );

  const data = {
    datasets: [
      {
        data: [
          statusCount.tersedia,
          statusCount.dipakai,
          statusCount.servis,
        ],
        backgroundColor: [
          "#facc15", // kuning
          "#ef4444", // merah
          "#22c55e", // hijau
        ],
      },
    ],
  };

  return <Pie data={data} />;
}
