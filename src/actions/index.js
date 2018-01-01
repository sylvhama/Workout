export const toggleNightMode = () => ({
  type: 'TOGGLE_NIGHT_MODE'
});

export const setNightMode = nightMode => ({
  type: 'SET_NIGHT_MODE',
  nightMode
});

export const resetConfig = () => ({
  type: 'RESET_CONFIG'
});

export const incrementCounter = () => ({
  type: 'INCREMENT_COUNTER'
});

export const decrementCounter = () => ({
  type: 'DECREMENT_COUNTER'
});

export const incrementWorkInterval = () => ({
  type: 'INCREMENT_WORK_INTERVAL'
});

export const decrementWorkInterval = () => ({
  type: 'DECREMENT_WORK_INTERVAL'
});

export const incrementRestInterval = () => ({
  type: 'INCREMENT_REST_INTERVAL'
});

export const decrementRestInterval = () => ({
  type: 'DECREMENT_REST_INTERVAL'
});

export const setTimerStart = counter => ({
  type: 'SET_TIMER_START',
  counter
});

export const setTimerPause = () => ({
  type: 'SET_TIMER_PAUSE'
});

export const setTimerStop = () => ({
  type: 'SET_TIMER_STOP'
});

export const decrementTimerCounter = () => ({
  type: 'DECREMENT_TIMER_COUNTER'
});
