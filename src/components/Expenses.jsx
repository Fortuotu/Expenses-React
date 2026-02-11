import ExpenseItem from './ExpenseItem.jsx'
import './Expense.css'
import Card from './Card.jsx'

function Expenses(props){
    return (
        <Card className='expenses'>
            {props.dataMain.map((expense) => (
            <ExpenseItem key={expense.id} data={expense} />
            ))}
        </Card>
    )
}

export default Expenses