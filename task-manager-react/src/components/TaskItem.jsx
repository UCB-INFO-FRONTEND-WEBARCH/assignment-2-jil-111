function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="task-checkbox"
      />
      <span className="task-text">{task.text}</span>
      <button
        onClick={() => onDelete(task.id)}
        className="delete-btn"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
