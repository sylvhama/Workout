const initialState = { counter: 1, workInterval: 1, restInterval: 0 };

const config = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_CONFIG':
      return initialState;
    case 'INCREMENT_COUNTER':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT_COUNTER':
      if (state.counter <= 1) return state;
      return { ...state, counter: state.counter - 1 };
    case 'INCREMENT_WORK_INTERVAL':
      return { ...state, workInterval: state.workInterval + 1 };
    case 'DECREMENT_WORK_INTERVAL':
      if (state.workInterval <= 1) return state;
      return { ...state, workInterval: state.workInterval - 1 };
    case 'INCREMENT_REST_INTERVAL':
      return { ...state, restInterval: state.restInterval + 1 };
    case 'DECREMENT_REST_INTERVAL':
      if (state.restInterval <= 0) return state;
      return { ...state, restInterval: state.restInterval - 1 };
    default:
      return state;
  }
};

export default config;
