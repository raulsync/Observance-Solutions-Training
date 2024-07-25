import { useState } from 'react';

const ExpenseForm = () => {
  const [incomeEntry, setIncomeEntry] = useState<string>('');
  const [expenseEntry, setExpenseEntry] = useState<string>('');
  const [nameInput, setNameInput] = useState<string>('');

  console.log(incomeEntry);
  console.log(expenseEntry);
  console.log(nameInput);

  // const expenseCategory = [{}];

  return (
    <div className=" w-full  form-container flex flex-1 flex-col bg-gray-100 border shadow-xl">
      <div className="income-form-control mb-4 flex justify-center flex-col">
        <h1 className="text-xl  font-bold my-1 mx-2">Income</h1>
        <form action="">
          <label
            htmlFor=""
            className=" px-4 mx-2 text-lg"
          >
            Add your income:
          </label>
          <input
            type="number"
            value={incomeEntry}
            onChange={(e) => setIncomeEntry(e.target.value)}
            placeholder="Income"
            className="px-4 py-1 outline-none rounded-md"
          />
          <button className=" bg-blue-400 py-1 px-4 mx-2 rounded-md text-white">
            Add
          </button>
        </form>
      </div>
      <hr className=" border-neutral-500 my-5" />
      <div className="expense-form-control flex justify-between flex-row gap-5 w-full ">
        <form
          action=""
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-24  justify-center">
            <div>
              <span>
                <button className="bg-gray-300 rounded-sm ml-5 px-4 py-1">
                  &#8377;
                </button>
              </span>
              <input
                className="ml-1 py-1 rounded-md px-4 outline-none"
                type="number"
                name="expense"
                id="expense-input"
                placeholder="Expense"
                value={expenseEntry}
                onChange={(e) => setExpenseEntry(e.target.value)}
              />
            </div>
            <input
              className="ml-1 py-1 rounded-md px-4 outline-none"
              type="text"
              name="name"
              id="name-input"
              placeholder="Name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            <select className="ml-1 py-1 rounded-md px-4 outline-none">
              <option
                value=""
                disabled
                selected
                hidden
              >
                select category
              </option>
              <option value="fruit">fruit</option>
              <option value="vegetable">vegetable</option>
              <option value="movies">movies</option>
              <option value="shopping">shopping</option>
            </select>
            <input
              className="ml-1 py-1 rounded-md px-4 outline-none"
              type="date"
            />
          </div>
          <div className="flex items-center justify-center mb-4 ">
            <button className="py-2 px-4 bg-blue-500 text-white rounded-md">
              Save entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
