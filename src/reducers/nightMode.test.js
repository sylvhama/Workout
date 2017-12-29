import nightMode from './nightMode';

test('should handle initial state', () => {
  expect(nightMode(undefined, {})).toBe(true);
});

test('should handle TOGGLE_NIGHT_MODE', () => {
  expect(nightMode(true, { type: 'TOGGLE_NIGHT_MODE' })).toBe(false);
});
