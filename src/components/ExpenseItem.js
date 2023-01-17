import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      {/* passing data through different components via props */}
      {/* here passing data from App to ExpenseDate via ExpenseItem */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>);
}

export default ExpenseItem;
