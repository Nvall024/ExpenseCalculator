import React from 'react';
import Expenses from "./components/Expenses/Expenses";

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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
