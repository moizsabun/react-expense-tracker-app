import React , {useState,useContext }from 'react'
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
    const [text, setText] =  useState('');
    const [amount, setamount] =  useState('');


    const { addTransactoin } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        
        const newTransaction = {
        
            id: Math.floor( Math.random() * 1000000000),
            text,
            amount : +amount
        }


    addTransactoin(newTransaction);
    }

    
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text"> Text</label>
                    <input type="text" value={text} onChange={ (e) => {setText(e.target.value) }} placeholder= "Enter text..."></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"> Amount <br/> (negative - expense , positive - income) </label>
                    <input type="number" value={amount} onChange={ (e) => {setamount(e.target.value) }}  placeholder= "Enter amount..."></input>
                </div>
                <button className="btn"> Add Transaction </button>
            </form>
        </div>
    )
}
