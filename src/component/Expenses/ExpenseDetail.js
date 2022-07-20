import React from 'react'
// import "./ExpenseDetail.css"
export default function ExpenseDetail(props) {
  return (
    <>
    <h3>{props.childtitle}</h3>
    <div className='expense-item__price'>{props.childamount}</div>
    

    </>
  )
}
