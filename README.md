Finance Dashboard:
This is a simple Finance Dashboard built using React.
It helps users track income, expenses, and view financial insights using charts and tables.

Features:
Dashboard with total balance, income, and expenses
Add, edit, and delete transactions (Admin only)
Search transactions by category
Spending breakdown (Pie Chart)
Balance trend (Line Chart)
Role-based UI (Viewer / Admin)
Dark mode support
Data persistence using localStorage

️ Tech Stack:
React (Vite)
Tailwind CSS
Context API
Recharts
Lucide React

Installation & Setup:
1. Clone the project:-
   git clone <repo-link>
   cd finance-dashboard
2. Install :-
   npm install
3. Run the project:-
   npm run dev

Project Structure:-
src/
│
├── components/
│   ├── Navbar/
│   ├── Summary_Cards/
│   ├── Charts/
│   │   ├── Balance_Chart/
│   │   └── CategoryChart/
│   ├── Transactions/
│   ├── Insights/
│   └── DarkMode/
│
├── Context/
│   └── TransactionProvider.jsx
│
├── Constants/
│   └── Constants.jsx
│
├── Utils/
│   └── Utils.jsx
│
├── App.jsx
└── main.jsx


How it works:-
Context API manages transaction state
Data is stored in localStorage
Charts are generated dynamically from data
Role system controls UI access (Viewer / Admin)


Live Demo:https://finance-dashboard-eight-peach.vercel.app/