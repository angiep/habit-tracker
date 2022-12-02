import MonthDisplay from './MonthDisplay/MonthDisplay';
import { habits, completions } from './data';
import './HabitTracker.css';

function HabitTracker() {
  // fetch habits and completions
  // merge data and initialize frontend state
  // write function helpers for managing localstorage

  return (
    <div className="HabitTracker">
      <header className="HabitTracker-header">
        <h1>Angie's Habit Tracker</h1>
      </header>
      <MonthDisplay
        month={0}
        year={2023}
        habits={habits}
        completions={completions}
      />
    </div>
  );
}

export default HabitTracker;
