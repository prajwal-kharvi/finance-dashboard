import {LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid} from "recharts";
import {Balance_Chart_Data} from "../../../Constants/Constants.jsx";

const Balance_Chart=()=>{
    return(
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2 text-black dark:text-white">Balance Chart</h2>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={Balance_Chart_Data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                    <XAxis dataKey="month" stroke="#6b7280"/>
                    <YAxis stroke="#6b7280" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#1f2937", // dark bg
                            border: "none",
                            color: "#fff",
                        }}
                    />
                    <Line type="monotone" dataKey="balance" stroke="#2563eb" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
        </div>
    )
}

export default Balance_Chart