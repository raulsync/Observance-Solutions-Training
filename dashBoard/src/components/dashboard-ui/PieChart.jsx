import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ mockData }) {
  const labels = mockData.map((da) => da.day);

  console.log(labels);

  const pieDataSet = mockData.map((da) => da.sales);
  console.log(pieDataSet);

  const data = {
    label: labels,
    datasets: [
      {
        label: 'Pie-Chart',
        data: pieDataSet,
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
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 71, 1)',
          'rgba(144, 238, 144, 1)',
          'rgba(135, 206, 250, 1)',
          'rgba(238, 130, 238, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full h-full  items-center justify-center flex bg-white shadow-lg">
      <Pie data={data} />
    </div>
  );
}

export default PieChart;
