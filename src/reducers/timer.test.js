import timer, { initialState } from './timer';

const intervals = [
  { interval: 5, type: 'start' },
  { interval: 20, type: 'workout' },
  { interval: 10, type: 'rest' },
  { interval: 20, type: 'workout' },
  { interval: 10, type: 'rest' },
  { interval: 20, type: 'workout' }
];

test('should handle initial state', () => {
  expect(timer(undefined, {})).toEqual(initialState);
});

test('should handle SET_TIMER_START', () => {
  expect(timer(initialState, { type: 'SET_TIMER_START', intervals })).toEqual({
    show: true,
    play: true,
    index: intervals.length - 1,
    intervals
  });
});

test('should handle SET_TIMER_PAUSE', () => {
  expect(timer(initialState, { type: 'SET_TIMER_PAUSE' })).toEqual({
    ...initialState,
    play: false
  });
});

test('should handle SET_TIMER_STOP', () => {
  expect(
    timer(
      {
        show: true,
        play: true,
        index: intervals.length - 1,
        intervals
      },
      { type: 'SET_TIMER_STOP' }
    )
  ).toEqual(initialState);
});

test('should handle DECREMENT_TIMER_INTERVAL', () => {
  const index = intervals.length - 1;
  expect(
    timer(
      {
        show: true,
        play: true,
        index: intervals.length - 1,
        intervals
      },
      { type: 'DECREMENT_TIMER_INTERVAL' }
    )
  ).toEqual({
    show: true,
    play: true,
    index,
    intervals: [
      ...intervals.slice(0, index - 1),
      { ...intervals[index], interval: intervals[index].interval - 1 },
      ...intervals.slice(index + 1)
    ]
  });
});
