import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { useTransactions } from "../../../Context/TransactionProvider.jsx";

const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AA336A",
    "#8884D8",
    "#FF6699",
    "#33CC99",
];

const Category_Chart = () => {
    const { data } = useTransactions();

    const categoryTotals = {};

    data
        .filter((item) => item.type === "expense")
        .forEach((item) => {
            const category = item.category;
            if (!categoryTotals[category]) {
                categoryTotals[category] = 0;
            }
            categoryTotals[category] += Number(item.amount);
        });

    const chartData = Object.keys(categoryTotals).map((key) => ({
        name: key,
        value: categoryTotals[key],
    }));

    return (
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2 text-black dark:text-white">
                Spending Breakdown
            </h2>

            <div className="flex justify-center items-center">
                <PieChart width={300} height={250}>

                    <Pie
                        data={chartData}
                        dataKey="value"
                        outerRadius={100}
                    >
                        {chartData.map((item, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>

                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#1f2937", // dark bg
                            border: "none",
                            color: "#fff",
                        }}
                    />
                </PieChart>
            </div>
        </div>
    );
};

export default Category_Chart;