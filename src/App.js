
import Costs from './components/Costs/Costs';

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
      <h1> Начнем изучение React </h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
