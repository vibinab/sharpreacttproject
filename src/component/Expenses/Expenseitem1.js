import React from 'react'

import ExpenseDate from './ExpenseDate'
import ExpenseDetail from './ExpenseDetail'
import "./Expenseitem1.css"
import Card from '../UI/Card'


export default function Expenseitem1(props) {

    let date=props.date

    let title=props.title

    let amount=props.amount

    const deletehandler=()=> {
      console.log(title)
      console.log("del")
      title="" 
      amount=""
      date=""
      console.log(title)
    }
  
    return (
    <div className='expense-item'>
         <ExpenseDate date={date}/>
         
         <div className='expense-item__description'>
            {/* <h2>{props.title}</h2> */}
            {/* <h2>{props.location}</h2> */}
            <ExpenseDetail childtitle={title} childamount={amount}/>
            
            {/* <div className='expense-item__price'>{props.amount}</div> */}
            <button className="expensedelete" onClick={deletehandler}>Delete Expense</button>
         </div>
    
    </div>
  )
}
