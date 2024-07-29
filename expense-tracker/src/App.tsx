import { useEffect, useState } from 'react';
import './App.css';
import ExpenseForm from './components/expenseForm/ExpenseForm';
import IncomeForm from './components/incomeForm/IncomeForm';
import ExpenseSummary from './components/expenseSummary/ExpenseSummary';
import ExpenseList from './components/expenseList.tsx/ExpenseList';

export interface IExpense {
  id: string;
  amount: string;
  name: string;
  category: string;
  date: string;
}

export interface IExpenseCategory {
  [category: string]: number;
}

function App() {
  const [income, setIncome] = useState<number>(0);
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const [expenseCategory, setExpenseCategory] = useState<IExpenseCategory>({});
  const [editExpense, setEditExpense] = useState<IExpense | null>(null);

  useEffect(() => {
    const categoryTotals = expenses.reduce((acc, expense) => {
      if (acc[expense.category]) {
        acc[expense.category] += parseFloat(expense.amount);
      } else {
        acc[expense.category] = parseFloat(expense.amount);
      }
      return acc;
    }, {} as IExpenseCategory);
    setExpenseCategory(categoryTotals);
  }, [expenses]);

  //Add Income --->
  const addIncome = (amount: number) => {
    setIncome((prevIncome) => prevIncome + amount);
  };
  console.log(income);

  //Add Expense ---->
  const addExpense = (expense: IExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);

    // setExpenseCategory((prevExpenseCategory) => {
    //   const updatedExpenseCategory = { ...prevExpenseCategory };
    //   const category = expense.category;
    //   const amount = parseFloat(expense.amount);

    //   if (updatedExpenseCategory[category]) {
    //     updatedExpenseCategory[category] += amount;
    //   } else {
    //     updatedExpenseCategory[category] = amount;
    //   }

    //   return updatedExpenseCategory;
    // });
  };

  //Delete expenses from list

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  console.log(expenseCategory, 'expense');

  // console.log(expenses);-
  const totalExpense = expenses.reduce((acc, expense) => {
    return acc + parseFloat(expense.amount);
  }, 0);

  //edit Expense --->

  const editingExpense = (expense: IExpense) => {
    setEditExpense(expense);
  };

  const updatedExpense = (updatedExpense: IExpense) => {
    setExpenses((prevExpense) =>
      prevExpense.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense,
      ),
    );
    setEditExpense(null);
  };

  const balance = income - totalExpense;
  console.log(balance);

  return (
    <>
      <div className=" entry-container border mt-3 mx-1 rounded-md bg-blue-100">
        <IncomeForm addIncome={addIncome} />
        <hr className="h-px my-8 bg-gray-400 border-0 " />
        <ExpenseForm
          addExpense={addExpense}
          expense={editExpense}
          updateExpense={updatedExpense}
        />
      </div>
      <div className="flex gap-3">
        <ExpenseSummary
          income={income}
          balance={balance}
          totalExpense={totalExpense}
          expenseCategory={expenseCategory}
        />
        <ExpenseList
          expenses={expenses}
          deleteExpense={deleteExpense}
          editingExpense={editingExpense}
        />
      </div>
    </>
  );
}

export default App;
