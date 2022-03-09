import './NewCost.css';
import CostForm from './CostForm';

const NewCost = () => {

    const saveDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toFixed(7).toString()
        }
        console.log(costData);
    }

    return <div className="new-cost">
        <CostForm onSaveCostData={saveDataHandler} />
    </div>
}

export default NewCost;