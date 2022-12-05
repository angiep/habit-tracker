/**
 * Helpers for manipulating the stored completions data
 */

export const addCompletions = (completions, data) => {
  const newCompletions = {...completions};

  if (newCompletions[data.date]) {
    if (newCompletions[data.date].indexOf(data.habit.id) > -1) {
      return newCompletions;
    }
    newCompletions[data.date].push(data.habit.id);
    return newCompletions;
  }

  newCompletions[data.date] = [data.habit.id];
  return newCompletions;
}

export const removeCompletions = (completions, data) => {
  const newCompletions = {...completions};
  if (!newCompletions[data.date]) {
    return newCompletions;
  }
  
  const removeIndex = newCompletions[data.date].indexOf(data.habit.id);
  if (removeIndex === -1) {
    return newCompletions;
  }
  
  newCompletions[data.date].splice(removeIndex, 1);
  if (newCompletions[data.date].length === 0) {
    delete newCompletions[data.date];
  }
  return newCompletions;
}