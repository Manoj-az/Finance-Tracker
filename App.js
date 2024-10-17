// src/App.js
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  const addExpense = (expense) => {
    const totalExpense = expenses.reduce((total, exp) => total + exp.amount, 0);

    // Check if the new expense exceeds the budget
    if (totalExpense + expense.amount > budget) {
      alert("Error: Budget exceeded! Please reduce the expense amount.");
      return;
    }

    setExpenses([...expenses, expense]);
  };

  const handleBudgetChange = (e) => {
    setBudget(parseFloat(e.target.value));
  };

  const deleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="container">
      <h1>Personal Finance Tracker</h1>
      <center><h2 className="project-name">Manage Your Expenses Effectively</h2></center>
      {/* Budget Input Section */}
      <div className="budget-section">
        <center><h2>Set Your Monthly Budget</h2>
        <input
          type="number"
          placeholder="Enter your budget"
          onChange={handleBudgetChange}
          style={{ marginBottom: "5px",fontSize:"20px",marginTop:"5px" }}
        />
        <p>Your budget: ${budget.toFixed(2)}</p></center>
      </div>

      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />

      {/* Display Total Expenses and Remaining Budget */}
      <ExpenseSummary totalExpense={totalExpense} budget={budget} />

      {/* Footer Section */}
      <footer className="footer">
        <center><p style={{ fontWeight:"bold" }}>© 2024 Personal Finance Tracker. All rights reserved.</p></center>
      </footer>
    </div>
  );
}

export default App;
