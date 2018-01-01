import timer from './timer';

test('should handle initial state', () => {
  expect(timer(undefined, {})).toEqual({
    counter: 0,
    show: false,
    play: false
  });
});

test('should handle SET_TIMER_START', () => {
  expect(
    timer(
      { counter: 0, show: false, play: false },
      { type: 'SET_TIMER_START', counter: 99 }
    )
  ).toEqual({
    counter: 99,
    show: true,
    play: true
  });
});

test('should handle SET_TIMER_PAUSE', () => {
  expect(
    timer({ counter: 0, show: true, play: true }, { type: 'SET_TIMER_PAUSE' })
  ).toEqual({
    counter: 0,
    show: true,
    play: false
  });
});

test('should handle SET_TIMER_STOP', () => {
  expect(
    timer({ counter: 0, show: true, play: true }, { type: 'SET_TIMER_STOP' })
  ).toEqual({
    counter: 0,
    show: false,
    play: false
  });
});

test('should handle DECREMENT_TIMER_COUNTER', () => {
  expect(
    timer(
      { counter: 1, show: false, play: false },
      { type: 'DECREMENT_TIMER_COUNTER' }
    )
  ).toEqual({
    counter: 0,
    show: false,
    play: false
  });
});
