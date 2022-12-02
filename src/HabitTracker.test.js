import { render, screen } from '@testing-library/react';
import HabitTracker from './HabitTracker';

test('renders HabitTracker app', () => {
  render(<HabitTracker />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
