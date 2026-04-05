import { useEffect, useState } from "react";

const DarkModeToggle = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        console.log("Dark mode:",dark)
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
        >
            {dark ? "🌙 Dark" : "☀️ Light"}
        </button>

    );
};

export default DarkModeToggle;