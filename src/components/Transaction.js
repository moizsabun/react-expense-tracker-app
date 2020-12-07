import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transactionProp }) => {
    const { deleteTransactoin } = useContext(GlobalContext);

    const sign = transactionProp.amount < 0 ? '-' : '+';
    return (
        <li className={transactionProp.amount < 0 ? 'minus' : 'plus'}>
            {transactionProp.text} <span>{sign}${Math.abs(transactionProp.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransactoin(transactionProp.id)}>x</button>
        </li>
    )
}
