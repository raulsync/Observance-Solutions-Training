import Plot from 'react-plotly.js';

function BubbleChart({ mockData }) {
  const data = [
    {
      x: mockData.map((da) => da.day),
      y: mockData.map((da) => da.sales),
      mode: 'markers',
      marker: {
        size: 10,
        color: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 71, 0.6)',
          'rgba(144, 238, 144, 0.6)',
          'rgba(135, 206, 250, 0.6)',
          'rgba(238, 130, 238, 0.6)',
        ],
        line: {
          color: 'rgba(54, 162, 235, 1)',
          width: 1,
        },
      },
      text: mockData.map((da) => `Day: ${da.day}, Sales: ${da.sales}`), // Tooltip text
    },
  ];

  const layout = {
    title: 'Bubble-Chart',
    xaxis: {
      title: 'Day',
    },
    yaxis: {
      title: 'Sales',
    },
    showlegend: false,
    height: 330,
    width: 700,
    plot_bgcolor: 'white',
    paper_bgcolor: 'white',
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-white shadow-lg">
      <Plot
        data={data}
        layout={layout}
      />
    </div>
  );
}

export default BubbleChart;
