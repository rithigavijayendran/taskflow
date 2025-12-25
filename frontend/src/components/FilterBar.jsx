import './FilterBar.css';

const FilterBar = ({ filter, setFilter }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilter({ status: '', priority: '', search: '' });
  };

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <input
          type="text"
          name="search"
          placeholder="🔍 Search tasks..."
          value={filter.search}
          onChange={handleFilterChange}
          className="search-input"
        />
      </div>

      <div className="filter-group">
        <select
          name="status"
          value={filter.status}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="">All Status</option>
          <option value="PENDING">Pending</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
      </div>

      <div className="filter-group">
        <select
          name="priority"
          value={filter.priority}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="">All Priorities</option>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
          <option value="URGENT">Urgent</option>
        </select>
      </div>

      {(filter.status || filter.priority || filter.search) && (
        <button onClick={clearFilters} className="clear-btn">
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default FilterBar;

