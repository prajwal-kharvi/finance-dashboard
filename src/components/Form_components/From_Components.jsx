const TransactionForm = ({
                             form,
                             handleChange,
                             handleSubmit,
                             isEditing,
                             closeModal
                         }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-[400px]">

                <h2 className="text-lg font-semibold mb-4">
                    {isEditing ? "Edit Transaction" : "Add Transaction"}
                </h2>

                <div className="flex flex-col gap-3">

                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="border p-2 rounded
                        bg-white text-black
                        dark:bg-gray-700 dark:border-gray-600 dark:text-white
                        placeholder-gray-400 dark:placeholder-gray-300"
                    />

                    <input
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        placeholder="Category"
                        className="border p-2 rounded
                        bg-white text-black
                        dark:bg-gray-700 dark:border-gray-600 dark:text-white
                        placeholder-gray-400 dark:placeholder-gray-300"
                    />

                    <input
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        className="border p-2 rounded
                        bg-white text-black
                        dark:bg-gray-700 dark:border-gray-600 dark:text-white
                        placeholder-gray-400 dark:placeholder-gray-300"
                    />

                    <input
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                        placeholder="Amount"
                        className="border p-2 rounded
                        bg-white text-black
                        dark:bg-gray-700 dark:border-gray-600 dark:text-white
                        placeholder-gray-400 dark:placeholder-gray-300"
                    />

                    <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        className="border p-2 rounded
                        bg-white text-black
                        dark:bg-gray-700 dark:border-gray-600 dark:text-white
                        placeholder-gray-400 dark:placeholder-gray-300"
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>

                    <div className="flex justify-between mt-3">
                        <button
                            onClick={closeModal}
                            className="px-3 py-2 bg-gray-400 text-white rounded"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={handleSubmit}
                            className={`px-3 py-2 text-white rounded ${
                                isEditing ? "bg-green-600" : "bg-blue-600"
                            }`}
                        >
                            {isEditing ? "Update" : "Add"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TransactionForm;