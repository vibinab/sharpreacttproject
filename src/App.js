import ExpenseItem from "./component/ExpenseItem";
import Expenseitem1 from "./component/Expenseitem1";
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

    const expenses1 = [
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


        
        <Expenseitem1 
        title={expenses1[0].title}
        amount={expenses1[0].amount} 
        date={expenses1[0].date}
        location={expenses[0].location}
          />
        
        <Expenseitem1 
        title={expenses1[1].title}
        amount={expenses1[1].amount} 
        date={expenses1[1].date}
        location={expenses[1].location}
          />

           
        <Expenseitem1 
        title={expenses1[2].title}
        amount={expenses1[2].amount} 
        date={expenses1[2].date}
        location={expenses[2].location}
          />

              
        <Expenseitem1 
        title={expenses1[3].title}
        amount={expenses1[3].amount} 
        date={expenses1[3].date}
        location={expenses[3].location}
          />
    </div>
  );
}

export default App;
