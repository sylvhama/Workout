import nightMode from './nightMode';

test('should handle initial state', () => {
  expect(nightMode(undefined, {})).toBe(true);
});

test('should handle TOGGLE_NIGHT_MODE', () => {
  expect(nightMode(true, { type: 'TOGGLE_NIGHT_MODE' })).toBe(false);
});

test('should handle SET_NIGHT_MODE', () => {
  expect(nightMode(true, { type: 'SET_NIGHT_MODE', nightMode: false })).toBe(
    false
  );
});
