import React , {useState}from 'react'


export const AddTransaction = () => {
    const [text, setText] =  useState('');
    const [amount, setamount] =  useState('');
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form id="form">
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
