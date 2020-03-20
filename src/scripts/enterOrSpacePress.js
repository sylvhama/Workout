export const enterOrSpacePress = (event, action) => {
  if (event.keyCode === 13 || event.keyCode === 32) {
    action();
  }
};
