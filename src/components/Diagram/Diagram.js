import './Diagram.css';
import DiagramBar from './DiagramBar';

const Diagram = (props) => {

    const dataSetValues = props.dataSet.map(data => data.value);

    const maxMonthCosts = Math.max(...dataSetValues);

    return <div className='diagram'>
        {props.dataSet.map(dataSet => <DiagramBar
            key={dataSet.label}
            value={dataSet.value}
            maxValue={maxMonthCosts}
            label={dataSet.label}
        />)}
    </div>
}

export default Diagram;