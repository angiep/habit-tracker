import { habits, completions } from '../data';

const LOCAL_STORAGE_NAME = 'habitTracker';

export const setLocalData = (data) => {
  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(data));
}

export const getLocalData = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_NAME);
  return !data ? { habits, completions } : JSON.parse(data);
}