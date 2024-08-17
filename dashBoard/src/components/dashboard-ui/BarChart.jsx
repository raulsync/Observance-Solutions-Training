import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, BarController, Legend } from 'chart.js';

Chart.register(BarElement, BarController, Legend);

function BarChart({ mockData }) {
  const labels = mockData.map((da) => da.day);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Bar-Chart',
        data: mockData.map((da) => da.sales),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
          'rgb(255, 99, 71)',
          'rgb(144, 238, 144)',
          'rgb(135, 206, 250)',
          'rgb(238, 130, 238)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Bar data={data} />
    </div>
  );
}

export default BarChart;
