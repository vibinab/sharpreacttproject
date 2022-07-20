import './ExpenseItem.css'

export default function ExpenseItem(props) {
    
    // const exppenseDate= new Date(2021,2,28);
    // const expenseTitle="Car Insurance"
    // const expenseAmount="299.7"
    // const LocationOfExpenditure="pune"

  return (
    <Card className='expense-item'>
        <div>{props.date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <h2>{props.location}</h2>
            <div className='expense-item__price'>{props.amount}</div>
            <button >Delete </button>
        </div>
    </Card>
  )
}
