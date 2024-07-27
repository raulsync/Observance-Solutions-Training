import { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

interface IExpense {
  id: string;
  amount: string;
  name: string;
  category: string;
  date: string;
}

interface Iprops {
  addExpense: (expense: IExpense) => void;
  updateExpense: (expense: IExpense) => void;
  expense: IExpense | null;
}

const ExpenseForm: React.FC<Iprops> = ({
  addExpense,
  expense,
  updateExpense,
}) => {
  const [expenseInput, setExpenseInput] = useState<string>('');
  const [nameInput, setNameInput] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    if (expense) {
      setExpenseInput(expense.amount);
      setNameInput(expense.name);
      setCategory(expense.category);
      setDate(expense.date);
    } else {
      setExpenseInput('');
      setNameInput('');
      setCategory('');
      setDate('');
    }
  }, [expense]);

  const handleExpenseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (expenseInput && nameInput && category && date) {
      const newExpense: IExpense = {
        id: expense ? expense.id : uuidv4(),
        amount: expenseInput,
        name: nameInput,
        category,
        date,
      };

      if (expense) {
        updateExpense(newExpense);
      } else {
        addExpense(newExpense);
      }

      // addExpense(newExpense);
      console.log(newExpense);

      setExpenseInput('');
      setNameInput('');
      setCategory('');
      setDate('');
    } else {
      console.log('Please fill out all form');
    }
  };

  return (
    <div className=" w-ful flex flex-row my-2">
      <form
        onSubmit={handleExpenseSubmit}
        className="w-full flex items-center justify-between gap-2"
      >
        <div className="expense flex items-center gap-1 mx-2">
          <button
            type="button"
            className="px-2 py-1 bg-gray-300 rounded-md"
          >
            &#8377;
          </button>
          <input
            className=" py-1 rounded-md px-4 outline-none border border-gray-300"
            type="text"
            placeholder="Expense"
            value={expenseInput}
            onChange={(e) => setExpenseInput(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 flex-1">
          <input
            className="name-input-field py-1 rounded-md px-4 outline-none border border-gray-300"
            type="text"
            placeholder="Name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <select
            className=" py-1 rounded-md px-4 outline-none border border-gray-300"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option
              value=""
              disabled
              selected
              // hidden
            >
              Select category
            </option>
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetable</option>
            <option value="movies">Movies</option>
            <option value="shopping">Shopping</option>
            <option value="beverage">Beverage</option>
            <option value="other">Other</option>
          </select>
          <input
            className="py-1 rounded-md px-4 outline-none border border-gray-300"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            type="submit"
            className="w-40 px-5 py-1 bg-blue-500 text-white rounded-md"
          >
            {expense ? 'Update Entry' : 'Save Entry'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
