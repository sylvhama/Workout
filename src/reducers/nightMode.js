const nightMode = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_NIGHT_MODE':
      return !state;
    default:
      return state;
  }
};

export default nightMode;
