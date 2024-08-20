import Plot from 'react-plotly.js';

function PieChart({ mockData }) {
  const labels = mockData.map((da) => da.day);
  const pieDataSet = mockData.map((da) => da.sales);

  const data = [
    {
      labels: labels,
      values: pieDataSet,
      type: 'pie',
      marker: {
        colors: [
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
      },
    },
  ];

  const layout = {
    title: 'Pie Chart',

    height: '100%',
    width: '100%',
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-white shadow-lg">
      <Plot
        data={data}
        layout={layout}
      />
    </div>
  );
}

export default PieChart;
