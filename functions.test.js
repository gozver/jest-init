const functions = require('./functions');

// toBe: primitive types
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY AND FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the oposit of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(0)).toBeFalsy();
  expect(functions.checkValue(null)).toBeFalsy();
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual: objects and arrays (reference)
test('User should be Lolo Gonzalez object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Lolo',
    lastName: 'Gonzalez',
    age: 43
  });
});

// toBeLessThan, toBeLessThanOrEqual, toBeGreaterThan and toBeGreaterThanOrEqual
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
  expect(load1 + load2 + 100).toBeLessThanOrEqual(1600);
});

// Regex: toMatch
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i); // insensitive
});

// Arrays
test('Admin should be in userNames', () => {
  userNames = ['jonh', 'karen', 'admin'];
  expect(userNames).toContain('admin');
});

// Working with async data

// Promise
test('User fetched name shoud be Leanne Graham (Promise)', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toBe('Leanne Graham');
  });
});

// Async Await
test('User fetched name shoud be Leanne Graham (Async Await)', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toBe('Leanne Graham');
});