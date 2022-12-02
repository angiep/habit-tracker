import MonthDisplay from './MonthDisplay/MonthDisplay';
import './HabitTracker.css';

function HabitTracker() {
  // fetch habits and completions
  // merge data and initialize frontend state
  // write function helpers for managing localstorage

  const habits = [
    {
      id: 1000,
      title: 'Wake up before 8:30am'
    },
    {
      id: 1001,
      title: 'Do 12-3-30'
    },
    {
      id: 1002,
      title: 'Cook all meals'
    }
  ];

  const completions = {
    '2023-01-01': [1001, 2002],
    '2023-01-02': [1000, 1001],
    '2023-01-03': [1000, 1001],
    '2023-01-06': [1001],
    '2023-01-07': [1001, 1002, 1003]
  }

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
