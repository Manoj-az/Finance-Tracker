// src/components/ExpenseList.js
import React from "react";

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map((expense, index) => (
          <div className="expense-item" key={index}>
            <span className="expense-title">{expense.title}</span>
            <span className="expense-amount">${expense.amount.toFixed(2)}</span>
            <span className="expense-date">{expense.date}</span>
            <span className="expense-category">{expense.category}</span>
            <button onClick={() => deleteExpense(index)} className="delete-button">Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;
