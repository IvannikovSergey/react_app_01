
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';
import React, { useState } from 'react';


const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(),
    description: "",
    amount: 0.00,
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
    amount: 9.99
  }
];

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCost => {
      return [cost, ...prevCost]
    });
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      {/* <Costs costs={costs} /> */}
      <Costs costs={costs} />
    </div>
  );
}

export default App;
