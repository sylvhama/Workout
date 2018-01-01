export const getMinutes = duration => Math.floor(duration / 60);

export const getSeconds = (duration, minutes) => duration - minutes * 60;
