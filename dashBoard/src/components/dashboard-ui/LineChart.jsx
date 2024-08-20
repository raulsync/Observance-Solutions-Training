import { Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function LineChart({ mockData }) {
  const data = {
    labels: mockData.map((da) => da.day),
    datasets: [
      {
        label: 'Line-Chart',
        // fill: false,N
        // lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: mockData.map((da) => da.sales),
      },
    ],
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-white shadow-lg">
      <Line data={data} />
    </div>
  );
}

export default LineChart;
