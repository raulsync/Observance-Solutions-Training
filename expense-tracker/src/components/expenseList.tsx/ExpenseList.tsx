import { IExpense } from '../../App';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
interface IExpenseListProps {
  expenses: IExpense[];
  deleteExpense: (id: string) => void;
  editingExpense: (expense: IExpense) => void;
}

const ExpenseList: React.FC<IExpenseListProps> = ({
  expenses,
  deleteExpense,
  editingExpense,
}) => {
  const handleDeleteExpense = (id: string) => {
    deleteExpense(id);
  };

  const handleEditExpense = (expense: IExpense) => {
    editingExpense(expense);
  };

  return (
    <div className="w-2/3 mt-2 h-[67vh] overflow-y-auto shadow-md rounded-md mx-2">
      <div className="list-header bg-slate-400 flex my-2 items-center justify-between h-14  rounded  px-5 mx-1 ">
        <div className="action font-bold text-white">Actions</div>
        <div className="expense-name font-bold text-white">Name</div>
        <div className="expense-category font-bold text-white">Category</div>
        <div className="expense-amount font-bold text-white">Amount</div>
      </div>
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="flex my-2 items-center justify-between h-14  rounded  px-5 mx-1 border-y-2 border-black-900"
        >
          <div className="actions flex flex-col items-center gap-2">
            <FaEdit
              className="text-lg cursor-pointer"
              onClick={() => handleEditExpense(expense)}
            />

            <RiDeleteBin5Line
              className="text-lg cursor-pointer"
              onClick={() => handleDeleteExpense(expense.id)}
            />
          </div>
          <div className="font-semibold uppercase"> {expense.name}</div>
          <div className="font-semibold uppercase"> {expense.category}</div>
          <div className="font-semibold uppercase"> {expense.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
