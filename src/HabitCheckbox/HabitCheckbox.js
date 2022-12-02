import PropTypes from 'prop-types';
import './HabitCheckbox.css';

function HabitCheckbox({habit}) {
  const {id, title} = habit
  const htmlId = `habit-${id}`;

  return (
    <div className="HabitCheckbox">
      <input type="checkbox" id={htmlId}></input>
      <label className="habit-title" htmlFor={htmlId}>{title}</label>
    </div>
  );
}

HabitCheckbox.propTypes = {
  habit: PropTypes.object
}

export default HabitCheckbox;