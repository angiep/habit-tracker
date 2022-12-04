import { useEffect, useReducer } from 'react';
import MonthDisplay from './MonthDisplay/MonthDisplay';
import { getLocalData, setLocalData } from './helpers/localStorage';
import { addCompletions, removeCompletions } from './helpers/completions';
import './HabitTracker.css';

function HabitTracker() {
  const initialState = {
    habits: [],
    completions: {}
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'RECEIVED_HABITS':
        return {
          ...state,
          habits: action.habits
        }
      case 'RECEIVED_COMPLETIONS':
        return {
          ...state,
          completions: action.completions
        }
      case 'ADD_COMPLETION':
        return {
          ...state,
          completions: addCompletions(state.completions, action.data)
        }
      case 'REMOVE_COMPLETION':
        return {
          ...state,
          completions: removeCompletions(state.completions, action.data)
        }
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const data = getLocalData();
    dispatch({ type: 'RECEIVED_HABITS', habits: data.habits });
    dispatch({ type: 'RECEIVED_COMPLETIONS', completions: data.completions });
  }, []);

  useEffect(() => {
    if (state.habits.length === 0 && Object.keys(state.completions).length === 0) {
      return;
    }
    setLocalData({ habits: state.habits, completions: state.completions });
  }, [state.habits, state.completions])

  return (
    <div className="HabitTracker">
      <header className="HabitTracker-header">
        <h1>Angie's Habit Tracker</h1>
      </header>
      <MonthDisplay
        year={2023}
        month={0}
        habits={state.habits}
        completions={state.completions}
        dispatch={dispatch}
      />
    </div>
  );
}

export default HabitTracker;
