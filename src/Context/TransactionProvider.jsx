import {useContext, useState} from "react";
import {Transactions_Data} from "../Constants/Constants";
import {TransactionContext} from "./TransactionContext";

export const TransactionProvider = ({ children }) => {
    const [data, setData] = useState(Transactions_Data);

    return (
        <TransactionContext.Provider value={{ data, setData }}>
            {children}
        </TransactionContext.Provider>
    );
};


export const useTransactions = () => {
    return useContext(TransactionContext);
};