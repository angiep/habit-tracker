import PropTypes from 'prop-types';
import HabitCheckbox from '../HabitCheckbox/HabitCheckbox';
import './DayDisplay.css';

export function isHabitCompletedForDate(date, habit, completions) {
  return completions[date] ? completions[date].includes(habit.id) : false
}

function DayDisplay({year, month, day, habits, completions, dispatch}) {
  const date = new Date(year, month, day);
  const dateFormatted = date.toISOString().split('T')[0];

  return (
    <div className="DayDisplay" key={`day-${day}`}>
      <h3>{day}</h3>
      {habits.map((habit) =>
        <HabitCheckbox
          habit={habit}
          isCompleted={isHabitCompletedForDate(dateFormatted, habit, completions)}
          date={dateFormatted}
          key={`habit-${habit.id}-${dateFormatted}`}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}

DayDisplay.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  day: PropTypes.number,
  habits: PropTypes.array,
  dispatch: PropTypes.func
}

export default DayDisplay;