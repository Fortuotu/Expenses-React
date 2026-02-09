import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from './components/ExpenseItem'

function App() {
  return (
    <div className='App'>
      <ExpenseItem />
      <ExpenseItem />
    </div>
  )
}

export default App
