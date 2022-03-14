

import './Costs.css'
import Card from '../UI/Card';
import CostFilter from './CostFilter';
import React, { useState } from 'react';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

function Costs(props) {

  const [selectedYear, setSelectedYear] = useState('2022');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  }

  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear;
  });



  return (
    <div>
      <Card className='costs'>
        <CostFilter year={selectedYear} changeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
}

export default Costs;