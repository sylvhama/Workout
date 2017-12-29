import timer from './timer';

test('should handle initial state', () => {
  expect(timer(undefined, {})).toEqual({
    counter: 0,
    workInterval: 1,
    restInterval: 0
  });
});

test('should handle INCREMENT_COUNTER', () => {
  expect(
    timer(
      { counter: 0, workInterval: 1, restInterval: 0 },
      { type: 'INCREMENT_COUNTER' }
    )
  ).toEqual({
    counter: 1,
    workInterval: 1,
    restInterval: 0
  });
});

test('should handle DECREMENT_COUNTER', () => {
  expect(
    timer(
      { counter: 1, workInterval: 1, restInterval: 0 },
      { type: 'DECREMENT_COUNTER' }
    )
  ).toEqual({
    counter: 0,
    workInterval: 1,
    restInterval: 0
  });
});

test('should handle DECREMENT_COUNTER when counter is 0', () => {
  expect(
    timer(
      { counter: 0, workInterval: 1, restInterval: 0 },
      { type: 'DECREMENT_COUNTER' }
    )
  ).toEqual({
    counter: 0,
    workInterval: 1,
    restInterval: 0
  });
});

test('should handle INCREMENT_WORK_INTERVAL', () => {
  expect(
    timer(
      { counter: 0, workInterval: 1, restInterval: 0 },
      { type: 'INCREMENT_WORK_INTERVAL' }
    )
  ).toEqual({
    counter: 0,
    workInterval: 2,
    restInterval: 0
  });
});

test('should handle DECREMENT_WORK_INTERVAL', () => {
  expect(
    timer(
      { counter: 0, workInterval: 2, restInterval: 0 },
      { type: 'DECREMENT_WORK_INTERVAL' }
    )
  ).toEqual({
    counter: 0,
    workInterval: 1,
    restInterval: 0
  });
});

test('should handle DECREMENT_WORK_INTERVAL when workInterval is 1', () => {
  expect(
    timer(
      { counter: 0, workInterval: 1, restInterval: 0 },
      { type: 'DECREMENT_WORK_INTERVAL' }
    )
  ).toEqual({
    counter: 0,
    workInterval: 1,
    restInterval: 0
  });
});

test('should handle INCREMENT_REST_INTERVAL', () => {
  expect(
    timer(
      { counter: 0, workInterval: 1, restInterval: 0 },
      { type: 'INCREMENT_REST_INTERVAL' }
    )
  ).toEqual({
    counter: 0,
    workInterval: 1,
    restInterval: 1
  });
});

test('should handle DECREMENT_REST_INTERVAL', () => {
  expect(
    timer(
      { counter: 0, workInterval: 1, restInterval: 1 },
      { type: 'DECREMENT_REST_INTERVAL' }
    )
  ).toEqual({
    counter: 0,
    workInterval: 1,
    restInterval: 0
  });
});

test('should handle DECREMENT_REST_INTERVAL when restInterval is 0', () => {
  expect(
    timer(
      { counter: 0, workInterval: 1, restInterval: 0 },
      { type: 'DECREMENT_REST_INTERVAL' }
    )
  ).toEqual({
    counter: 0,
    workInterval: 1,
    restInterval: 0
  });
});
