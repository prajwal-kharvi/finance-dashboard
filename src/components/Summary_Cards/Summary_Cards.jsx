import {GetSummaryData} from "../../Utils/Utils.jsx";


const Summary_Cards=()=>{
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {GetSummaryData().map((item,index)=>(
                <Card key={index} title={item.title} value={item.value} colour={item.color}/>
            ))}
        </div>
    );
}

function Card({ title, value,colour }) {
    return (
        <div className={`p-4 rounded shadow ${colour}`}>
            <p className="text-gray-700">{title}</p>
            <h2 className="text-xl font-bold">₹{value}</h2>
        </div>
    );
}


export default Summary_Cards