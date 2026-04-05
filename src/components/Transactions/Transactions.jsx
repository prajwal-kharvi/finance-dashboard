import { Pencil, Trash2, Plus } from "lucide-react";
import { useState } from "react";
import { useTransactions } from "../../Context/TransactionProvider.jsx";
import From_Components from "../Form_components/From_Components.jsx";

const Transactions = ({ role }) => {
    const { data, setData } = useTransactions();

    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);

    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    const [form, setForm] = useState({
        name: "",
        category: "",
        type: "expense",
        amount: "",
        date: "",
    });

    // INPUT CHANGE
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // OPEN ADD MODAL
    const openAddModal = () => {
        setIsEditing(false);
        setForm({
            name: "",
            category: "",
            type: "expense",
            amount: "",
            date: "",
        });
        setShowModal(true);
    };

    // OPEN EDIT MODAL
    const handleEdit = (item) => {
        setIsEditing(true);
        setEditId(item.id);
        setForm(item);
        setShowModal(true);
    };

    // ADD / UPDATE (COMMON FUNCTION)
    const handleSubmit = () => {
        if (!form.name || !form.category || !form.amount || !form.date) {
            alert("Please fill all fields");
            return;
        }

        if (isEditing) {
            setData(
                data.map((item) =>
                    item.id === editId ? { ...item, ...form } : item
                )
            );
        } else {
            const newTransaction = {
                id: Date.now(),
                ...form,
            };
            setData([newTransaction, ...data]);
        }

        setShowModal(false);
    };

    // DELETE
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    // FILTER
    const filteredData = data.filter((item) =>
        item.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded shadow">
            <h2 className="font-semibold mb-4">Transactions</h2>

            {/* SEARCH + ADD BUTTON */}
            <div className="flex gap-4 items-center mb-3">
                <input
                    type="text"
                    placeholder="Search category..."
                    className="border p-2 w-1/2 rounded bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="ml-auto">
                    {role === "Admin" && (
                    <button
                        onClick={openAddModal}
                        className="px-3 py-2 rounded flex gap-1 text-white bg-blue-600 items-center"
                    >
                        <Plus size={18} />
                        Add Transactions
                    </button>
                )}
                </div>
            </div>

            {/* TABLE */}
            <table className="w-full text-left text-black dark:text-white">
                <thead>
                <tr className="border-b">
                    <th className="py-2">Date</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Type</th>
                    <th>Amount</th>
                    {role === "Admin" && <th>Actions</th>}
                </tr>
                </thead>

                <tbody>
                {filteredData.map((item) => (
                    <tr key={item.id} className="border-b">
                        <td className="py-2">{item.date}</td>
                        <td>{item.name}</td>
                        <td>{item.category}</td>

                        <td
                            className={
                                item.type === "income"
                                    ? "text-green-500"
                                    : "text-red-500"
                            }
                        >
                            {item.type}
                        </td>

                        <td>₹{Number(item.amount)}</td>

                        {role === "Admin" && (
                            <td className="flex gap-3">
                                <button
                                    onClick={() => handleEdit(item)}
                                    className="text-blue-600 flex items-center gap-1"
                                >
                                    <Pencil size={16} />
                                    Edit
                                </button>

                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="text-red-600 flex items-center gap-1"
                                >
                                    <Trash2 size={16} />
                                    Delete
                                </button>
                            </td>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>

            {/* MODAL */}
            {showModal && (
                <From_Components
                    form={form}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isEditing={isEditing}
                    closeModal={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default Transactions;