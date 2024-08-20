import Plot from 'react-plotly.js';

function LineChart({ mockData }) {
  const data = [
    {
      x: mockData.map((da) => da.day),
      y: mockData.map((da) => da.sales),
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'rgba(75,192,192,1)' },
      line: { color: 'rgba(0,0,0,1)', width: 2 },
      name: 'Line-Chart',
    },
  ];

  const layout = {
    title: 'Line Chart',
    xaxis: {
      title: 'Day',
    },
    yaxis: {
      title: 'Sales',
    },
    paper_bgcolor: 'white',
    plot_bgcolor: 'white',
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

export default LineChart;
