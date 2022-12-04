import PropTypes from 'prop-types';
import DayDisplay from '../DayDisplay/DayDisplay';
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

function MonthDisplay({year, month, habits, completions, dispatch}) {
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const monthName = lastDayOfMonth.toLocaleString('default', { month: 'long' });
  const numberOfDays = lastDayOfMonth.getDate();
  const weeks = generateCalendarWeeks(numberOfDays);
  const weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
              <DayDisplay
                year={year}
                month={month}
                day={day}
                habits={habits}
                completions={completions}
                key={`day-${dayIndex}`}
                dispatch={dispatch}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

MonthDisplay.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  habits: PropTypes.array,
  completions: PropTypes.object,
  dispatch: PropTypes.func
}

export default MonthDisplay;