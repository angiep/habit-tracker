import { render, screen } from '@testing-library/react';
import DayDisplay from './DayDisplay';
import { isHabitCompletedForDate } from './DayDisplay';

describe('isHabitCompletedForDate', () => {
  test('habit is completed for date', () => {
    expect(
      isHabitCompletedForDate(
        '2023-01-01',
        { id: 1001 },
        { '2023-01-01': [1001] }
      )
    ).toBe(true);
  });

  test('habit is not completed on date but other habits are', () => {
    expect(
      isHabitCompletedForDate(
        '2023-01-02',
        { id: 1001 },
        { '2023-01-01': [1000] }
      )
    ).toBe(false);
  });

  test('habit is not completed for date and no other habits are', () => {
    expect(
      isHabitCompletedForDate(
        '2023-01-02',
        { id: 1001 },
        { '2023-01-01': [] }
      )
    ).toBe(false);
  });
})

