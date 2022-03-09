
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

function App() {
  const costs = [
    {
      id: 'c1',
      date: new Date(2022, 2, 21),
      description: "Холдильник",
      amount: 999.99,
    },
    {
      id: 'c2',
      date: new Date(2021, 11, 10),
      description: "MacBook",
      amount: 1300.99,
    },
    {
      id: 'c3',
      date: new Date(2022, 1, 3),
      description: "Джинсы",
      amount: 9.99,
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost)
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
