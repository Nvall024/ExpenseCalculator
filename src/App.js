import ExpenseItem from "./components/ExpenseItem";

function App() {

  console.log("----DOBBIE IN APP")

  const expense = [
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
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
        <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
    </div>
  );
}

export default App;
