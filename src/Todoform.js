import React, { useState } from "react";

function Todoform({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label">
        <input
          className="form-input"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder=" Type your task here"
        />
      </label>
    </form>
  );
}

export default Todoform;
