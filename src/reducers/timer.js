const timer = (state = { show: false, play: false, counter: 0 }, action) => {
  switch (action.type) {
    case 'SET_TIMER_START':
      return { ...state, show: true, play: true, counter: action.counter };
    case 'SET_TIMER_PAUSE':
      return { ...state, play: false };
    case 'SET_TIMER_STOP':
      return { ...state, show: false, play: false };
    case 'DECREMENT_TIMER_COUNTER':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default timer;
