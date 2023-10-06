import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
       {
      id: 'e2',
      title: 'New TV',
      amount: 94.12,
      date: new Date(2021, 2, 12)
    },
      {
      id: 'e3',
      title: 'Car Insurance',
      amount: 265.12,
      date: new Date(2021, 2, 27)
    }
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js')
    console.log(expense)
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
