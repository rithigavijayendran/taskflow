import { useState, useEffect } from 'react';
import './TaskForm.css';

const TaskForm = ({ onSubmit, editingTask, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'PENDING',
    priority: 'MEDIUM',
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description || '',
        status: editingTask.status,
        priority: editingTask.priority,
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = editingTask
      ? await onSubmit(editingTask.id, formData)
      : await onSubmit(formData);
    
    if (success) {
      setFormData({
        title: '',
        description: '',
        status: 'PENDING',
        priority: 'MEDIUM',
      });
    }
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      description: '',
      status: 'PENDING',
      priority: 'MEDIUM',
    });
    onCancel();
  };

  return (
    <div className="task-form-container">
      <h2>{editingTask ? '✏️ Edit Task' : '➕ Create New Task'}</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter task title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            placeholder="Enter task description (optional)"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="PENDING">Pending</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="COMPLETED">Completed</option>
              <option value="CANCELLED">Cancelled</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
              <option value="URGENT">Urgent</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingTask ? 'Update Task' : 'Create Task'}
          </button>
          {editingTask && (
            <button type="button" onClick={handleCancel} className="btn btn-secondary">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;

