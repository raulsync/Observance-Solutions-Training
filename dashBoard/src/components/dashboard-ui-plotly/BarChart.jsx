import Plot from 'react-plotly.js';

function BarChart({ mockData }) {
  const labels = mockData.map((da) => da.day);
  const data = [
    {
      x: labels,
      y: mockData.map((da) => da.sales),
      type: 'bar',
      marker: {
        color: [
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
        line: {
          color: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          width: 1,
        },
      },
    },
  ];

  const layout = {
    title: 'Bar-Chart',
    xaxis: {
      title: 'Day',
    },
    yaxis: {
      title: 'Sales',
    },
    plot_bgcolor: 'white',
    paper_bgcolor: 'white',
  };

  return (
    <div className="h-full w-full flex justify-center items-center bg-white shadow-lg">
      <Plot
        data={data}
        layout={layout}
      />
    </div>
  );
}

export default BarChart;
