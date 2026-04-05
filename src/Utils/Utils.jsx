import {useTransactions} from "../Context/TransactionProvider.jsx";

 export const GetSummaryData=()=>{
     const {data} = useTransactions();
    const income=data.filter((item)=>item.type==="income").reduce((acc,curr)=>acc+ Number(curr.amount),0)
    const expenses=data.filter((item)=>item.type==="expense").reduce((acc,curr)=>acc+Number(curr.amount) ,0)
    const balance=income-expenses

    return([
            { title: "Balance", value:balance, color: "bg-green-300" },
            { title: "Income", value:income, color: "bg-blue-300" },
            { title: "Expenses", value:expenses, color: "bg-red-300" },
        ]
    )
}
