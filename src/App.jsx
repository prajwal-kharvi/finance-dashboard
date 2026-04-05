import Navbar from "./components/Navbar/Navbar.jsx";
import Summary_Cards from "./components/Summary_Cards/Summary_Cards.jsx";
import Balance_Chart from "./components/Charts/Balance_Chart/Balance_Chart.jsx";
import Category_Chart from "./components/Charts/CategoryChart/Category_Chart.jsx";
import Transactions from "./components/Transactions/Transactions.jsx";
import Insights from "./components/Insights/Insights.jsx";
import {useState} from "react";
import {Transactions_Data} from "./Constants/Constants.jsx";

const App=()=> {
    const [role,setRole]=useState("viewer")
  return (
      <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen">
          <Navbar role={role} setRole={setRole} />
          <div className="p-4 space-y-4">
              <Summary_Cards />
              <div className="flex gap-4">

                  {/* Balance Chart */}
                  <div className="w-1/2">
                      <Balance_Chart />
                  </div>

                  {/* Category Chart */}
                  <div className="w-1/2">
                      <Category_Chart />
                  </div>

              </div>
              <Transactions role={role}/>
              <Insights data={Transactions_Data}/>
          </div>

      </div>

  );
}

export default App;