// import ExpenseItem from "./component/ExpenseItem";
// import Expenseitem1 from "./component/Expenseitem1";
import Expenses from "./component/Expenses/Expenses";
import ExpenseForm from "./component/Expenses/ExpenseForm";
import NewExpense from "./component/NewExpense/NewExpense";
function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location:"Delhi"
    },
    { id: 'e2',
     title: 'New TV', 
     amount: 799.49, 
     date: new Date(2021, 2, 12),
     location:'Kerala'
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location:"Pune"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location:"Goa"
    },

  ];

    
  return (
    <div>
      <h2>Let's get started!</h2>
        {/* { expenses.map((m)=> {

          return( 
          <ExpenseItem title={m.title} amount={m.amount} date={m.date} location={m.location}/>
          )
        })

     
        }
 */}
     {/* <ExpenseForm /> */}

     <NewExpense />
     <Expenses items={expenses} />
        
    </div>
  );
}

export default App;
