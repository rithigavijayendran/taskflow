import './TaskItem.css';

const TaskItem = ({ task, onEdit, onDelete }) => {
  const getStatusClass = (status) => {
    const statusMap = {
      PENDING: 'status-pending',
      IN_PROGRESS: 'status-progress',
      COMPLETED: 'status-completed',
      CANCELLED: 'status-cancelled',
    };
    return statusMap[status] || 'status-pending';
  };

  const getPriorityClass = (priority) => {
    const priorityMap = {
      LOW: 'priority-low',
      MEDIUM: 'priority-medium',
      HIGH: 'priority-high',
      URGENT: 'priority-urgent',
    };
    return priorityMap[priority] || 'priority-medium';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="task-item">
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <div className="task-badges">
          <span className={`badge ${getStatusClass(task.status)}`}>
            {task.status.replace('_', ' ')}
          </span>
          <span className={`badge ${getPriorityClass(task.priority)}`}>
            {task.priority}
          </span>
        </div>
      </div>

      {task.description && (
        <p className="task-description">{task.description}</p>
      )}

      <div className="task-meta">
        <div className="task-date">
          <small>Created: {formatDate(task.createdAt)}</small>
        </div>
        {task.updatedAt && task.updatedAt !== task.createdAt && (
          <div className="task-date">
            <small>Updated: {formatDate(task.updatedAt)}</small>
          </div>
        )}
      </div>

      <div className="task-actions">
        <button onClick={() => onEdit(task)} className="btn-edit">
          ✏️ Edit
        </button>
        <button onClick={() => onDelete(task.id)} className="btn-delete">
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

