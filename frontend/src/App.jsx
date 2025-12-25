import { useState, useEffect } from 'react';
import { taskAPI } from './services/api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState({ status: '', priority: '', search: '' });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      let response;
      if (filter.search) {
        response = await taskAPI.searchTasks(filter.search);
      } else if (filter.status) {
        response = await taskAPI.getTasksByStatus(filter.status);
      } else if (filter.priority) {
        response = await taskAPI.getTasksByPriority(filter.priority);
      } else {
        response = await taskAPI.getAllTasks();
      }
      setTasks(response.data);
    } catch (err) {
      setError('Failed to fetch tasks. Please try again.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      await taskAPI.createTask(taskData);
      fetchTasks();
      return true;
    } catch (err) {
      setError('Failed to create task. Please try again.');
      console.error('Error creating task:', err);
      return false;
    }
  };

  const handleUpdateTask = async (id, taskData) => {
    try {
      await taskAPI.updateTask(id, taskData);
      setEditingTask(null);
      fetchTasks();
      return true;
    } catch (err) {
      setError('Failed to update task. Please try again.');
      console.error('Error updating task:', err);
      return false;
    }
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await taskAPI.deleteTask(id);
        fetchTasks();
      } catch (err) {
        setError('Failed to delete task. Please try again.');
        console.error('Error deleting task:', err);
      }
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleLogin = (token) => {
    setIsAuthenticated(true);
  };

  const handleRegister = (token) => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    setTasks([]);
  };

  if (!isAuthenticated) {
    return showRegister ? (
      <Register
        onRegister={handleRegister}
        onSwitchToLogin={() => setShowRegister(false)}
      />
    ) : (
      <Login
        onLogin={handleLogin}
        onSwitchToRegister={() => setShowRegister(true)}
      />
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div>
            <h1>📝 Task Management System</h1>
            <p>Organize your tasks efficiently with Spring Boot & React</p>
          </div>
          <div className="user-info">
            <span>Welcome, {localStorage.getItem('username')}!</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <TaskForm
            onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
            editingTask={editingTask}
            onCancel={handleCancelEdit}
          />

          {error && (
            <div className="error-message">
              {error}
              <button onClick={() => setError(null)}>✕</button>
            </div>
          )}

          <FilterBar filter={filter} setFilter={setFilter} />

          {loading ? (
            <div className="loading">Loading tasks...</div>
          ) : (
            <TaskList
              tasks={tasks}
              onEdit={handleEdit}
              onDelete={handleDeleteTask}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

