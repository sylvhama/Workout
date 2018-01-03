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
    pause: false,
    index: 0,
    intervals
  });
});

test('should handle SET_TIMER_PAUSE', () => {
  expect(timer(initialState, { type: 'SET_TIMER_PAUSE', pause: true })).toEqual(
    {
      ...initialState,
      pause: true
    }
  );
});

test('should handle SET_TIMER_STOP', () => {
  expect(
    timer(
      {
        show: true,
        pause: false,
        index: 0,
        intervals
      },
      { type: 'SET_TIMER_STOP' }
    )
  ).toEqual(initialState);
});

test('should handle DECREMENT_TIMER_INTERVAL', () => {
  const index = 0;
  expect(
    timer(
      {
        show: true,
        pause: false,
        index,
        intervals
      },
      { type: 'DECREMENT_TIMER_INTERVAL' }
    )
  ).toEqual({
    show: true,
    pause: false,
    index,
    intervals: [
      ...intervals.slice(0, index),
      { ...intervals[index], interval: intervals[index].interval - 1 },
      ...intervals.slice(index + 1)
    ]
  });
});

test('should handle INCREMENT_TIMER_INDEX', () => {
  expect(
    timer(
      {
        show: true,
        pause: false,
        index: 0,
        intervals
      },
      { type: 'INCREMENT_TIMER_INDEX' }
    )
  ).toEqual({
    show: true,
    pause: false,
    index: 1,
    intervals
  });
});
