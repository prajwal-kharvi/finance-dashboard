import {User} from "lucide-react";
import DarkModeToggle from "../../DarkMode/DarkMode.jsx";

const Navbar=({role,setRole})=>{
    return(
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 shadow flex items-center justify-between">

            {/* Left: Title */}
            <h1 className="text-xl font-bold">Finance Dashboard</h1>

            {/* Right: Controls */}
            <div className="flex items-center gap-4">
                <DarkModeToggle/>

                {/* Right: Icon + Dropdown */}
                <div className="flex items-center gap-2 border px-3 py-1 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <User size={28} className="text-blue-600 fill-blue-600 stroke-0" />

                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="bg-transparent focus:outline-none text-black dark:text-white"
                    >
                        <option className="bg-white text-black dark:bg-gray-700 dark:text-white" value="Viewer">Viewer</option>
                        <option className="bg-white text-black dark:bg-gray-700 dark:text-white" value="Admin">Admin</option>
                    </select>
                </div>
            </div>

        </div>
    );
}

export default Navbar