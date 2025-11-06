function TaskCounter({ tasks, filter, filteredTasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  const getCounterText = () => {
    if (filter === 'all') {
      return `Total: ${totalTasks} tasks | Completed: ${completedTasks}`;
    } else if (filter === 'active') {
      const activeTasks = filteredTasks.length;
      return `Active: ${activeTasks} of ${totalTasks} tasks`;
    } else if (filter === 'completed') {
      return `Completed: ${completedTasks} of ${totalTasks} tasks`;
    }
  };

  return (
    <div className="task-counter">
      {getCounterText()}
    </div>
  );
}

export default TaskCounter;
