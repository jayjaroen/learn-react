import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className; /// anything we received from the className outside is added to the string
  return (
    <div className={classes}>{props.children}</div>
    // childern is a reserved name
    // the value of children props will always be the value between the opening and closing tags
  )
}

export default Card;
