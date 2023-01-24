import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'; //the concept of composition(Children props)

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log('hahahahha');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* passing data through different components via props */}
      {/* here passing data from App to ExpenseDate via ExpenseItem */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Here</button>
      {/* not clickHandler() because the code will be parsed when JSX is return, not when the event is happened */}
      {/* just point at it, not excuted here '()' */}
    </Card>);
}

export default ExpenseItem;
