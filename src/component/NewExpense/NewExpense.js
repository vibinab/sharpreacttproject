import React, { useState } from 'react'
import "./NewExpense.css";
import ExpressForm1 from './ExpressForm1';

export default function NewExpense(props) {

const [showaddbutton, setshowform]= useState(true)

const showbuttonclickhander=()=> {
    setshowform(false)
}

const cancelbuttonclickhander=()=> {
    setshowform(true)
}

 const onSaveExpenseDataHandler= (enteredExpenseData)=>{
    const expenseData= {
   
        ...enteredExpenseData,
        id:Math.random().toString()

    };
    console.log("new express",expenseData)
    props.onAddExpense(expenseData)
    setshowform(true)
 }

  return (
    <div className='new-expense'>
    { showaddbutton && <button onClick={showbuttonclickhander}>Add Expense</button>}
     {!showaddbutton && <ExpressForm1 onSaveExpenseData= {onSaveExpenseDataHandler} 
        onCancel={cancelbuttonclickhander}
     />}
    </div>
  )
}
