import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue === '') {
      return;
    }

    onAddTask(trimmedValue);
    setInputValue('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
