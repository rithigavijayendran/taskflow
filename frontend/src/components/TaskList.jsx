import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📋</div>
        <h3>No tasks found</h3>
        <p>Create your first task to get started!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      <h2>📋 Tasks ({tasks.length})</h2>
      <div className="task-grid">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

