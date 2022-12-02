import PropTypes from 'prop-types';
import HabitCheckbox from '../HabitCheckbox/HabitCheckbox';
import './MonthDisplay.css';

function generateCalendarWeeks(numberOfDays) {
  const days = [...Array(numberOfDays)].map((value, index) => index + 1)
  const weeks = [];
  while (days.length > 0) {
    weeks.push(days.splice(0, 7))
  }

  // TODO: put in filler for beginnings and ends of calendar month
  return weeks;
}

function MonthDisplay({month, year, habits = []}) {
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const monthName = lastDayOfMonth.toLocaleString('default', { month: 'long' });
  const numberOfDays = lastDayOfMonth.getDate();
  const weeks = generateCalendarWeeks(numberOfDays);
  const weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // TODO: setup completions data
  // TODO: setup checking and unchecking (connect to local storage)
  return (
    <div className="MonthDisplay">
      <h2>{monthName} {year}</h2>
      <div className="Calendar">
        <div className="Calendar-day-names">
          {weekDayNames.map((weekDayName, weekDayNamesIndex) =>
            <div className="Calendar-day-name" key={weekDayName}>{weekDayName}</div>
          )}
        </div>
        {weeks.map((week, weekIndex) =>
          <div className="Calendar-week" key={`week-${weekIndex}`}>
            {week.map((day, dayIndex) =>
              <div className="Calendar-day" key={`day-${day}`}>
                <h3>{day}</h3>
                {habits.map((habit) => <HabitCheckbox habit={habit} key={`habit-${habit.id}`}/>)}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

MonthDisplay.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  habits: PropTypes.array
}

export default MonthDisplay;