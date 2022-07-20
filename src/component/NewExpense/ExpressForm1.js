import React , {useState} from 'react'
import "./ExpressForm1.css";

export default function ExpressForm1() {

const [enteredTitle, setenteredTitle]=useState("");

const [enteredAmount, setenteredAmount]= useState(" ");

const [enteredDate, setenteredDate]=useState(" ");



 const titlechangehandler=(event)=>{
    console.log(enteredTitle)
setenteredTitle(event.target.value)

 }


 const amountchangehandler=(event)=> {
setenteredAmount(event.target.value)
 }


 const datechangehandler=(event)=> {
    setenteredDate(event.target.value)
 }

  return (
<form>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" onChange={titlechangehandler} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number"  min="0.01" step="0.01" onChange={amountchangehandler} />
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type="date"  min="2022-01-01" max="2022-12-30"  onChange={datechangehandler}/>
        </div>
        <div className='new-expense__actioins'>
           <button type="submit">Add expense</button>
        </div>
    </div>
</form>
    
    
  )
}
