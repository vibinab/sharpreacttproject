import React ,{useState}from 'react'

import ExpenseDate from './ExpenseDate'
import ExpenseDetail from './ExpenseDetail'
import "./Expenseitem1.css"
import Card from '../UI/Card'


export default function Expenseitem1(props) {

    const [amount,setamount]=useState(props.amount)
    
    const changeamount=()=>{
      setamount(100)
    }

    // let date=props.date

    // let title=props.title

    // let amount=props.amount

    // const deletehandler=()=> {
    //   console.log(title)
    //   console.log("del")
    //   title="" 
    //   amount=""
    //   date=""
    //   console.log(title)
    // }
    // const [title,settitle]= useState(props.title)

    
    // const titleedit= ()=> {
    //    settitle("updated")
    // }

  
    return (
    <div className='expense-item'>
         <ExpenseDate date={props.date}/>
         
         <div className='expense-item__description'>
            {/* <h2>{props.title}</h2> */}
            {/* <h2>{props.location}</h2> */}
            <ExpenseDetail childtitle={props.title} childamount={amount}/>
            
            {/* <div className='expense-item__price'>{props.amount}</div> */}
            {/* <button className="expensedelete" onClick={deletehandler}>Delete Expense</button> */}

            {/* <button onClick={titleedit}>edit title</button> */}
            <button onClick={changeamount}>changeamount</button>
            
         </div>
    
    </div>
  )
}
