import React from 'react'

import Expenseitem1 from './Expenseitem1';
import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses(props) {

  return (
    <div className="expenses">
        
        <Expenseitem1 
        title={props.items[0].title}
        amount={props.items[0].amount} 
        date={props.items[0].date}
        location={props.items[0].location}
          />
        
        <Expenseitem1 
        title={props.items[1].title}
        amount={props.items[1].amount} 
        date={props.items[1].date}
        location={props.items[1].location}
          />

           
        <Expenseitem1 
        title={props.items[2].title}
        amount={props.items[2].amount} 
        date={props.items[2].date}
        location={props.items[2].location}
          />

              
        <Expenseitem1 
        title={props.items[3].title}
        amount={props.items[3].amount} 
        date={props.items[3].date}
        location={props.items[3].location}
          />
    </div>
  )
}
