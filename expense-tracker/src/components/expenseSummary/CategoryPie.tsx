import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { IExpenseCategory } from '../../App';

ChartJS.register(ArcElement, Tooltip, Legend);
interface Iprops {
  expenseCategory: IExpenseCategory;
}

const CategoryPie: React.FC<Iprops> = ({ expenseCategory }) => {
  console.log(expenseCategory);
  const data = {
    labels: Object.keys(expenseCategory),
    datasets: [
      {
        data: Object.values(expenseCategory),

        backgroundColor: [
          'red',
          'lightgreen',
          'blue',
          'yellow',
          'lime',
          'beige',
        ],
      },
    ],
  };

  return (
    <div className="w-[80%] h-2/3 mx-auto p-4 flex items-center justify-center">
      <Pie data={data} />
    </div>
  );
};

export default CategoryPie;
