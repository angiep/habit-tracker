import PropTypes from 'prop-types';
import './HabitCheckbox.css';

function HabitCheckbox({habit, isCompleted, date, dispatch}) {
  const {id, title} = habit
  const htmlId = `habit-${id}-${date}`;

  const handleChange = (props) => {
    const data = { date, habit };
    
    if (!isCompleted) {
      dispatch({ type: 'ADD_COMPLETION', data });
      return;
    }

    dispatch({ type: 'REMOVE_COMPLETION', data });
  }

  return (
    <div className="HabitCheckbox">
      <input type="checkbox" id={htmlId} onChange={handleChange} checked={isCompleted}></input>
      <label className="habit-title" htmlFor={htmlId}>{title}</label>
    </div>
  );
}

HabitCheckbox.propTypes = {
  habit: PropTypes.object,
  isCompleted: PropTypes.bool,
  date: PropTypes.string,
  dispatch: PropTypes.func
}

export default HabitCheckbox;