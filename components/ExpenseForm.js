// src/components/ExpenseForm.js
import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [otherCategory, setOtherCategory] = useState(""); // State for other category input

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date || (!category && !otherCategory)) {
      alert("Please fill in all fields");
      return;
    }

    const expense = {
      title,
      amount: parseFloat(amount),
      date,
      category: category === "Other" ? otherCategory : category, // Use other category if selected
    };

    addExpense(expense);
    setTitle("");
    setAmount("");
    setDate("");
    setCategory("");
    setOtherCategory(""); // Reset other category
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Expense</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      
      {/* Category Input */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
        <option value="Other">Other</option>
      </select>

      {/* Input for Other Category */}
      {category === "Other" && (
        <input
          type="text"
          placeholder="Specify Other Category"
          value={otherCategory}
          onChange={(e) => setOtherCategory(e.target.value)}
        />
      )}

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
