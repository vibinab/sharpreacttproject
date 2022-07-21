import React,{useState} from 'react'
import ExpensesChart from './ExpensesChart';
import Expenseitem1 from './Expenseitem1';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';


// const Expenses= (props)=> {

// }

export default function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses= props.items.filter( expense=> {
    return expense.date.getFullYear().toString()===filteredYear
  })

  return (
    <div className="expenses">
        <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}

        />
        <ExpensesChart expenses={filteredExpenses}/>

        { filteredExpenses.length===0? (
          <p>No expenses found</p>
        ):(
          
          filteredExpenses.map((expense)=> {
            return (
              <Expenseitem1 key={expense.id} 
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date}
                
              />
            )
          })
        )}

        { filteredExpenses.length===1 && <p>Only single Expense here. Please add more..." </p>}

        {/* <Expenseitem1 
        title={props.items[0].title}
        amount={props.items[0].amount} 
        date={props.items[0].date}
        location={props.items[0].location}
          />
        
        <Expenseitem1 
        title={props.items[1].title}
        amount={props.items[1].amount} 
        date={props.items[1].date}
        location={props.items[1].location}
          />

           
        <Expenseitem1 
        title={props.items[2].title}
        amount={props.items[2].amount} 
        date={props.items[2].date}
        location={props.items[2].location}
          />

              
        <Expenseitem1 
        title={props.items[3].title}
        amount={props.items[3].amount} 
        date={props.items[3].date}
        location={props.items[3].location}
          /> */}
    </div>
  )
}
