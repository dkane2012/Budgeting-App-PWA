import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await fetch('/api/expenses');
      if (!response.ok) throw new Error('Failed to fetch expenses');
      const data = await response.json();
      setExpenses(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddExpense = async (expenseData) => {
    try {
      const response = await fetch('/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseData),
      });

      if (!response.ok) throw new Error('Failed to add expense');
      const newExpense = await response.json();
      setExpenses([newExpense, ...expenses]);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Expense Tracker</h1>
      </header>
      
      <ExpenseForm onSubmit={handleAddExpense} />
      
      {loading && <p>Loading expenses...</p>}
      {error && <p className="error">{error}</p>}
      
      <div className="expenses-list">
        <h2>Recent Expenses</h2>
        {expenses.map(expense => (
          <div key={expense._id} className="expense-item">
            <span>${expense.amount.toFixed(2)}</span>
            <span>{expense.description}</span>
            <span>{expense.category}</span>
            <span>{new Date(expense.date).toLocaleDateString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;