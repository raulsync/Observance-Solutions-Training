import { useState } from 'react';

interface Iprops {
  addIncome: (amount: number) => void;
}

const IncomeForm: React.FC<Iprops> = ({ addIncome }) => {
  const [incomeEntry, setIncomeEntry] = useState<string>('');

  console.log(incomeEntry);

  const handleIncomeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (incomeEntry) {
      console.log(incomeEntry);
      addIncome(parseFloat(incomeEntry));
      setIncomeEntry('');
    } else {
      console.log('please enter amount');

      <span>Please Enter Amount</span>;
    }
  };

  return (
    <div className="income-input-container w-full flex flex-col justify-center gap-4 my-4">
      <div className="income-header flex-1">
        <h1 className="text-xl font-semibold">New Entry</h1>
      </div>
      <div className="form-control flex items-center gap-4">
        <form
          onSubmit={handleIncomeSubmit}
          className="flex items-center"
        >
          <label
            htmlFor="income"
            className="font-semibold px-2"
          >
            Add your income :
          </label>
          <input
            type="number"
            required
            placeholder="Add your income"
            value={incomeEntry}
            onChange={(e) => setIncomeEntry(e.target.value)}
            className="py-1 px-4 outline-none rounded-md border"
          />
          <button
            type="submit"
            className=" w-24 py-1 bg-blue-500 px-4 rounded-md text-white ml-2"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default IncomeForm;
