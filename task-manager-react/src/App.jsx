import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (taskText) => {
    const newTask = {
      id: crypto.randomUUID(),
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getFilteredTasks = () => {
    if (filter === 'active') {
      return tasks.filter(task => !task.completed);
    }
    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  };

  const filteredTasks = getFilteredTasks();
  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <>
      <header className="header">
        <img src="/assets/menu_icon.png" alt="Menu Icon" />
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <img src="/assets/search_icon.png" alt="Search Icon" />
          <input
            type="text"
            placeholder="Quick Find"
            className="search-form__input"
          />
        </form>
        <div className="header__task-status">
          <span>{completedCount}/{totalCount}</span>
          <img src="/assets/check_icon.png" alt="Completed Tasks Icon" />
        </div>
      </header>

      <div className="container">
        <nav className="sidebar">
          <ul className="sidebar__list">
            <li className="sidebar__item">
              <img src="/assets/inbox_icon.png" alt="Inbox Icon" />
              <span>Inbox</span>
              <span className="sidebar__count">{totalCount}</span>
            </li>
            <li className="sidebar__item">
              <img src="/assets/calendar_icon.png" alt="Today Icon" />
              <span>Today</span>
              <span className="sidebar__count">{totalCount}</span>
            </li>
            <li className="sidebar__item">
              <img src="/assets/upcoming_icon.png" alt="Upcoming Icon" />
              <span>Upcoming</span>
            </li>
          </ul>
        </nav>

        <main className="task-view">
          <h1 className="task-view__title">Inbox</h1>

          <TaskForm onAddTask={addTask} />

          <TaskCounter tasks={tasks} filter={filter} filteredTasks={filteredTasks} />

          <div className="filter-buttons">
            <button
              className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={filter === 'active' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button
              className={filter === 'completed' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>

          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </main>
      </div>
    </>
  );
}

export default App;
