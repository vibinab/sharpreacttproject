import React , {useState} from 'react'
import "./ExpressForm1.css";

export default function ExpressForm1(props) {

const [enteredTitle, setenteredTitle]=useState("");

const [enteredAmount, setenteredAmount]= useState(" ");

const [enteredDate, setenteredDate]=useState(" ");

// const  [userInput, setuserInput] = useState({
//     enteredTitle:"",
//     enteredAmount:"",
//     enteredDate:""
// })


 const titlechangehandler=(event)=>{
    setenteredTitle(event.target.value)
    // setuserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    // })

    // setuserInput((prevState)=> {
    //     return {...prevState, enteredTitle:event.target.value}
    // })

 }


 const amountchangehandler=(event)=> {

    setenteredAmount(event.target.value)
// setuserInput({
//     ...userInput,
//     enteredAmount:event.target.value
// })

// setuserInput((prevState)=> {
//     return {...prevState, enteredAmount:event.target.value}
// })



 }


 const datechangehandler=(event)=> {

    setenteredDate(event.target.value)
    // setuserInput({
    //     ...userInput,
    //     enteredDate:event.target.value
    // })

//    setuserInput((prevState)=> {
//         return {...prevState, enteredDate:event.target.value}
//    })

} 

const submithandler=(event) =>{
    event.preventDefault();

    const expenseData= {
        title:enteredTitle,
        amount:enteredAmount,
        date: new Date(enteredDate)
    }

    console.log(expenseData)

    props.onSaveExpenseData(expenseData);
    setenteredTitle('')
    setenteredAmount('')
    setenteredDate('')


}



  return (
<form onSubmit={submithandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" 
            value={enteredTitle}
             onChange={titlechangehandler} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number"  
            min="0.01" 
            step="0.01" 
            value={enteredAmount}
            onChange={amountchangehandler} />
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type="date"  
            min="2022-01-01"
             max="2022-12-30"  
             value={enteredDate}
             onChange={datechangehandler}/>
        </div>
        <div className='new-expense__actioins'>
           <button type="button" onClick={props. onCancel}>Cancel</button>
           <button type="submit">Add expense</button>
        </div>
    </div>
</form>
    
    
  )
}
