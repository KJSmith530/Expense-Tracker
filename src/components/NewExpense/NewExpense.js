import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  const showFormHandler = () => {
    setFormIsOpen(true);
  };
  const closeFormHandler = () => {
    setFormIsOpen(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setFormIsOpen(false);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!formIsOpen && (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
      {formIsOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          closeForm={closeFormHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
