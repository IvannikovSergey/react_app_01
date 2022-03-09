
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

function App() {
  const costs = [
    {
      date: new Date(2022, 2, 21),
      description: "Холдильник",
      amount: 999.99,
    },
    {
      date: new Date(2021, 11, 10),
      description: "MacBook",
      amount: 1300.99,
    },
    {
      date: new Date(2022, 1, 3),
      description: "Джинсы",
      amount: 9.99,
    },
  ];
  return (
    <div>
      <NewCost />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
