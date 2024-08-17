import BarChart from './BarChart';
import BubbleChart from './BubbleChart';
import LineChart from './LineChart';
import PieChart from './PieChart';

function MainContainer() {
  const mockData = [
    { day: '1', sales: 4 },
    { day: '2', sales: 2 },
    { day: '3', sales: 10 },
    { day: '4', sales: 7 },
    { day: '5', sales: 7 },
    { day: '6', sales: 6 },
    { day: '7', sales: 2 },
    { day: '8', sales: 2 },
    { day: '9', sales: 8 },
    { day: '10', sales: 9 },
  ];

  return (
    <div className="w-full h-[100vh] overflow-hidden">
      <div className="upper flex gap-3 h-1/2 w-full">
        <div className="w-1/2 h-[48vh]">
          <PieChart mockData={mockData} />
        </div>
        <div className="w-1/2 h-[48vh]">
          <BubbleChart mockData={mockData} />
        </div>
      </div>
      <div className="lower flex gap-3 h-1/2 w-full bg-white">
        <div className="w-1/2 h-[48vh]">
          <LineChart mockData={mockData} />
        </div>
        <div className="w-1/2 h-[48vh]">
          <BarChart mockData={mockData} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
