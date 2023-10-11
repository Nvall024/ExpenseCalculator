import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
    // console.log('Expenses.js')
    // console.log(selectedYear)

  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expensesContent = <p>No expenses found</p>;

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}
        />
    ))
  }

  return(
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
     {expensesContent}
    </Card>
  )
}

export default Expenses;