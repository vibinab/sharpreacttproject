import React from 'react'

import ExpenseDate from './ExpenseDate'
import ExpenseDetail from './ExpenseDetail'
import "./Expenseitem1.css"

export default function Expenseitem1(props) {
  
    return (
    <div className='expense-item'>
         <ExpenseDate date={props.date}/>
         
         <div className='expense-item__description'>
            {/* <h2>{props.title}</h2> */}
            <h2>{props.location}</h2>
            <ExpenseDetail childtitle={props.title} childamount={props.amount}/>
            
            {/* <div className='expense-item__price'>{props.amount}</div> */}
         </div>
    
    </div>
  )
}
