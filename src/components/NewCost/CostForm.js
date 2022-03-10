import React, { useState } from 'react';
import './CostForm.css';
const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // })

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value
        // })
        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         name: event.target.value
        //     }
        // });
    }
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
    }
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        props.onSaveCostData(costData)
        setInputName('');
        setInputAmount('');
        setInputDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control input">
                <label>Название</label>
                <input type="text" value={inputName} onChange={nameChangeHandler} />
            </div>
            <div className="new-cost__control input">
                <label>Сумма</label>
                <input type="number" value={inputAmount} min={0.01} step={0.01} onChange={amountChangeHandler} />
            </div>
            <div className="new-cost__control input">
                <label>Дата</label>
                <input type="date" value={inputDate} min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler} />
            </div>
            <div className="new-cost__actions">
                <button type="submit">Добавить Расход</button>
            </div>
        </div>
    </form>
}

export default CostForm;