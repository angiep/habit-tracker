import { render, screen } from '@testing-library/react';
import HabitTracker from './HabitTracker';

test('renders HabitTracker app', () => {
  render(<HabitTracker />);
  const linkElement = screen.getByText(/Angie's Habit Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
