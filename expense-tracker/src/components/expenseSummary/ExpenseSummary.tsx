import { IExpenseCategory } from '../../App';
import CategoryPie from './CategoryPie';

interface IProps {
  income: number;
  totalExpense: number;
  balance: number;
  expenseCategory: IExpenseCategory;
}

const ExpenseSummary: React.FC<IProps> = ({
  income,
  totalExpense,
  balance,
  expenseCategory,
}) => {
  return (
    <div className="w-1/3 flex flex-col gap-1 items-ceter rounded-md shadow-md h-[67vh] ml-2 mt-2">
      <div className="income flex flex-col justify-center h-14 bg-green-500 rounded  px-5 mx-1">
        <p className="text-white">{income}</p>
        <p className="text-white">Income</p>
      </div>
      <div className="totalExpense flex flex-col justify-center h-14 bg-red-500 rounded  px-5 mx-1">
        <p className="text-white">{totalExpense}</p>
        <p className="text-white">Total Expense</p>
      </div>
      <div className="balance flex flex-col justify-center h-14 bg-gray-400 rounded  px-5 mx-1">
        <p className="text-white">{balance}</p>
        <p className="text-white">Balance</p>
      </div>
      <div className="expense-by-category shadow-md h-[55%] mt-2 mx-1 border-2">
        <h1 className="font-semibold mx-2 text-center ">
          Expenses by category
        </h1>
        <CategoryPie expenseCategory={expenseCategory} />
      </div>
    </div>
  );
};

export default ExpenseSummary;
