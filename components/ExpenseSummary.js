// src/components/ExpenseSummary.js
import React from "react";

function ExpenseSummary({ totalExpense, budget }) {
  return (
    <div className="expense-summary">
      <h3>Total Expenses: ${totalExpense.toFixed(2)}</h3>
      <h3>Remaining Budget: ${Math.max(0, (budget - totalExpense)).toFixed(2)}</h3>
    </div>
  );
}

export default ExpenseSummary;
