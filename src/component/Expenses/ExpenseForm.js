import React from 'react'

export default function ExpenseForm() {

    const getinput=(event)=> {

          let expense= event.target.value
          console.log(expense)
    }
  return (
    <div>ExpenseForm
    <form>
        <label>Expense title</label>
        <input type="text"  onChange={getinput}></input>
        <label> Expense Amount</label>
        <input type="number"></input>
        <label>Date</label>
        <input type="date"></input>
        <button  type="submit">Add expense</button>
    </form>
    
    </div>
  )
}
