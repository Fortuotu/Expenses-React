import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from './components/ExpenseItem'
import Expenses from './components/Expenses.jsx'

function App() {
  const expenses = [
    {
      date : new Date(2026, 0, 10),
      title : 'New website so cool to read',
      price : 25.99
    },
    {
      date : new Date(2026, 0, 5),
      title : 'Ligma',
      price : 99.99
    },
    {
      date : new Date(2026, 0, 6),
      title : 'Balls',
      price : 12.59
    },
  ]

  return (
    <div className='app'>
      <Expenses dataMain={expenses}/>
    </div>
  )
}

export default App
