import React, { useState } from 'react';
import './NewCost.css';
import CostForm from './CostForm';

const NewCost = (props) => {

    const saveDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toFixed(7).toString()
        }
        props.onAddCost(costData);
        setIsFormVisible(false);
    }

    const [isFormVisible, setIsFormVisible] = useState(false);

    const inputCostDataHandler = () => {
        setIsFormVisible(true);
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false)
    }

    return <div className="new-cost">
        {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить Новый Заказ</button>}
        {isFormVisible && <CostForm onCancel={cancelCostHandler} onSaveCostData={saveDataHandler} />}

    </div>
}

export default NewCost;