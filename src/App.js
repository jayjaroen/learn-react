import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* can be self-closing tag, if there's no content between openning and closing tags, below it works both way */}
      {/* ExpenseItem component using the date data in the app component */}
      <Expenses expenses={expenses} />
    </div>
  );
  // If writing with react obj instead of JSX (old version), it is:
  // return (
  //   React.createElement('div', {}, React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { item: expenses }))
  // );
}

export default App;
