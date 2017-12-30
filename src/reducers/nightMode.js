const nightMode = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_NIGHT_MODE':
      return !state;
    case 'SET_NIGHT_MODE':
      return action.nightMode;
    default:
      return state;
  }
};

export default nightMode;
