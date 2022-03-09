import './NewCost.css';
import CostForm from './CostForm';

const NewCost = (props) => {

    const saveDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toFixed(7).toString()
        }
        props.onAddCost(costData)
    }

    return <div className="new-cost">
        <CostForm onSaveCostData={saveDataHandler} />
    </div>
}

export default NewCost;