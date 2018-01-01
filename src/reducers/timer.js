const timer = (state = { show: false, counter: 0 }, action) => {
  switch (action.type) {
    case 'SET_TIMER_SHOW':
      return { ...state, show: action.show };
    case 'SET_TIMER_COUNTER':
      return { ...state, counter: action.counter };
    case 'DECREMENT_TIMER_COUNTER':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default timer;
