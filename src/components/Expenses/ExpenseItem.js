import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'; //the concept of composition(Children props)

function ExpenseItem(props) {
  // useState return an array: 1) the value of the variable itself; 2) second element is updating function
  // JS data destructure
  // useState call inside of the component function, not nested function
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Updated'); // pass an argument
    console.log(title); // don't change the value right away but schedule the state update
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* passing data through different components via props */}
      {/* here passing data from App to ExpenseDate via ExpenseItem */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Here</button>
      {/* not clickHandler() because the code will be parsed when JSX is return, not when the event is happened */}
      {/* just point at it, not excuted here '()' */}
    </Card>);
}

export default ExpenseItem;
