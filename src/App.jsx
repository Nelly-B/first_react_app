import { useState } from 'react'
import './App.css'
import './nav1.css'
// import './Expense.css'
// import Navbar1 from '../components/nav'
import ExpenseItem from '../components/ExpenseItem'
import Expenses from '../components/Expenses'

 function App() {
//   const expenses = [
//     {
//       id: 'el',
//       title : 'Toilet Paper',
//       amount : 94.12,
//       date : new Date(2024, 4, 12)
//     },
//     {
//       id: 'e2',
//       title : 'New TV',
//       amount : 794.12,
//       date : new Date(2024, 4, 23)
//     },
//     {
//       id: 'e3',
//       title : 'Car Insurance',
//       amount : 294.78,
//       date : new Date(2024, 4, 28)
//     },
//     {
//       id: 'e4',
//       title : 'New Shirt',
//       amount : 194.12,
//       date : new Date(2024, 4, 30)
//     }

//   ]
   return (
    <>
    <div>
    <h2>Lets get started!</h2>
    <Expenses />
    </div>
    
      
    </>
   )
 }

 export default App
