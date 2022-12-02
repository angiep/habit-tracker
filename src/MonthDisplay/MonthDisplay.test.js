import { render, screen } from '@testing-library/react';
import MonthDisplay from './MonthDisplay';

test('displays days of week', () => {
  render(<MonthDisplay month={0} year={2023} habits={[]}/>);
  expect(screen.getByText('Sunday')).toBeInTheDocument();
  expect(screen.getByText('Monday')).toBeInTheDocument();
  expect(screen.getByText('Tuesday')).toBeInTheDocument();
  expect(screen.getByText('Wednesday')).toBeInTheDocument();
  expect(screen.getByText('Thursday')).toBeInTheDocument();
  expect(screen.getByText('Friday')).toBeInTheDocument();
  expect(screen.getByText('Saturday')).toBeInTheDocument();
});