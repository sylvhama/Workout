export const initialState = {
  show: false,
  play: false,
  index: 0,
  intervals: []
};

const timer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TIMER_START':
      return {
        show: true,
        play: true,
        index: action.intervals.length - 1,
        intervals: action.intervals
      };
    case 'SET_TIMER_PAUSE':
      return { ...state, play: false };
    case 'SET_TIMER_STOP':
      return initialState;
    case 'DECREMENT_TIMER_INTERVAL':
      const { index, intervals } = state;
      return {
        ...state,
        intervals: [
          ...intervals.slice(0, index - 1),
          { ...intervals[index], interval: intervals[index].interval - 1 },
          ...intervals.slice(index + 1)
        ]
      };
    case 'DECREMENT_TIMER_INDEX':
      return { ...state, index: state.index - 1 };
    default:
      return state;
  }
};

export default timer;
