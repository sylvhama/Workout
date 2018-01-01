import timer from './timer';

test('should handle initial state', () => {
  expect(timer(undefined, {})).toEqual({
    counter: 0,
    show: false
  });
});

test('should handle SET_TIMER_SHOW', () => {
  expect(
    timer({ counter: 0, show: false }, { type: 'SET_TIMER_SHOW', show: true })
  ).toEqual({
    counter: 0,
    show: true
  });
});

test('should handle DECREMENT_TIMER_COUNTER', () => {
  expect(
    timer({ counter: 1, show: false }, { type: 'DECREMENT_TIMER_COUNTER' })
  ).toEqual({
    counter: 0,
    show: false
  });
});

test('should handle SET_TIMER_COUNTER', () => {
  expect(
    timer(
      { counter: 0, show: false },
      { type: 'SET_TIMER_COUNTER', counter: 99 }
    )
  ).toEqual({
    counter: 99,
    show: false
  });
});
