import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, toggleComplete, toggleDelete }) => {
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => toggleComplete(id)}
      >
        {title}
      </button>
      <button className="tasks__item__remove button" onClick={() => toggleDelete(id)}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleDelete: PropTypes.func.isRequired,
};

export default Task;
