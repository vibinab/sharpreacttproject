import React from 'react'
import "./NewExpense.css";
import ExpressForm1 from './ExpressForm1';

export default function NewExpense(props) {

 const onSaveExpenseDataHandler= (enteredExpenseData)=>{
    const expenseData= {
   
        ...enteredExpenseData,
        id:Math.random().toString()

    };
    console.log("new express",expenseData)
    props.onAddExpense(expenseData)
 }

  return (
    <div className='new-expense'>
      <ExpressForm1 onSaveExpenseData= {onSaveExpenseDataHandler}/>
    </div>
  )
}
