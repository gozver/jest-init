const isAnagram = require('./anagram');

test('isAnagram function exists', () => {
  expect(isAnagram).toBeDefined();
  expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"hello" is NOT an anagram of "aloha"', () => {
  expect(isAnagram('hello', 'aloha')).toBeFalsy();
});