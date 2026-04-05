import {useTransactions} from "../../Context/TransactionProvider.jsx";


const Insights=()=>{
    const {data} = useTransactions();
    // Filter only expenses
    const expenses=data.filter(item=>item.type ==="expense")

    // Group & sum by category
    const CategoryTotals=expenses.reduce((acc,curr)=>{
        if(!acc[curr.category]){
            acc[curr.category]=0
        }
        acc[curr.category]+=Number(curr.amount)
        return acc

    },{})

    let MaxCategory="";
    let MaxAmount=0;

    for(let category in CategoryTotals){
        if(CategoryTotals[category]>MaxAmount){
            MaxAmount=CategoryTotals[category]
            MaxCategory=category
        }
    }

    return(
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2 text-black dark:text-white">Insights</h2>
            {MaxCategory ? (
                <p className="text-gray-700 dark:text-gray-300">Most spending is on <strong>{MaxCategory}</strong> : ₹{MaxAmount}</p>
            ):(
                <p>No expense data available</p>
            )}
        </div>
    )
}

export default Insights