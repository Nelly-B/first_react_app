import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from './Card'

function Expenses() {
    const expenses = [
      {
        id: 'el',
        title : 'Toilet Paper',
        amount : 94.12,
        date : new Date(2024, 4, 12)
      },
      {
        id: 'e2',
        title : 'New TV',
        amount : 794.12,
        date : new Date(2024, 4, 23)
      },
      {
        id: 'e3',
        title : 'Car Insurance',
        amount : 294.78,
        date : new Date(2024, 4, 28)
      },
      {
        id: 'e4',
        title : 'New Shirt',
        amount : 194.12,
        date : new Date(2024, 4, 30)
      }
  
    ]
    return (
      <>
        <Card className="expenses">

        <ExpenseItem 
        title = {expenses[0].title} 
        amount={expenses[0].amount}
        date={expenses[0].date}>
        </ExpenseItem>
        <ExpenseItem
        title = {expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}>
        </ExpenseItem>
        <ExpenseItem 
        title = {expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}>
        </ExpenseItem>
        <ExpenseItem 
        title = {expenses[3].title} 
        amount={expenses[3].amount} 
        date={expenses[3].date}>
        </ExpenseItem>

        </Card>
        
      </>
    )
  }
  
  export default Expenses