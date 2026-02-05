import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

export default function BookingChart({ bookings }) {
  const statusCount = bookings.reduce(
    (acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    },
    {
      menunggu: 0,
      ditolak: 0,
      disetujui: 0,
      selesai: 0,
    }
  );

  const data = {
    datasets: [
      {
        data: [
          statusCount.menunggu,
          statusCount.ditolak,
          statusCount.disetujui,
          statusCount.selesai,
        ],
        backgroundColor: [
          "#facc15", // kuning
          "#ef4444", // merah
          "#22c55e", // hijau
          "#3b82f6", // biru
        ],
      },
    ],
  };

  return <Pie data={data} />;
}
