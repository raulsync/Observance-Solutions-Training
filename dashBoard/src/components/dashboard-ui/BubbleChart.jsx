import { Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BubbleController,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BubbleController, LinearScale, PointElement, Tooltip, Legend);

function BubbleChart({ mockData }) {
  // const labels = mockData.map((da) => da.day);

  // console.log(labels);

  // const bubbleDataSet = mockData.map((da) => da.sales);
  // console.log(bubbleDataSet);

  const data = {
    datasets: [
      {
        label: 'Bubble-Chart',
        data: mockData.map((da) => ({
          x: da.day,
          y: da.sales,
          r: da.sales / 10,
        })),
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',
          'rgba(255, 99, 71)',
          'rgba(144, 238, 144)',
          'rgba(135, 206, 250)',
          'rgba(238, 130, 238)',
        ],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <Bubble data={data} />
    </div>
  );
}

export default BubbleChart;
