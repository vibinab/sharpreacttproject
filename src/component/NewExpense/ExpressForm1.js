import React from 'react'
import "./ExpressForm1.css";

export default function ExpressForm1() {
  return (
<form>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number"  min="0.01" step="0.01"/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type="date"  min="2022-01-01" max="2022-12-30"/>
        </div>
        <div className='new-expense__actioins'>
           <button type="submit">Add expense</button>
        </div>
    </div>
</form>
    
    
  )
}
