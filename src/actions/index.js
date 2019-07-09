export const setColors = (colors) => ({
  type: 'SET_COLORS',
  colors
});

export const toggleLocked = (id) => ({
  type: 'TOGGLE_LOCKED',
  id
});

export const setUser = (user) => ({
  type: 'SET_USER',
  user
});