import { render, screen } from '@testing-library/react';
import HabitCheckbox from './HabitCheckbox';
import { habits } from '../data';

test('displays habit title', () => {
  render(<HabitCheckbox habit={habits[0]}/>);
  expect(screen.getByText('Wake up before 8:30am')).toBeInTheDocument();
});