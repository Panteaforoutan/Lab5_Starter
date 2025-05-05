// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// Phone number
test('valid phone number', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('invalid phone number', () => {
  expect(isPhoneNumber("12345607890")).toBe(false);
});

test('valid phone number', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('invalid phone number', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

// Email
test('valid email', () => {
  expect(isEmail("test@example.com")).toBe(true);
});

test('invalid email', () => {
  expect(isEmail("testexample.com")).toBe(false);
});

test('valid email', () => {
  expect(isEmail("test@example_domain.com")).toBe(true);
});

test('invalid email', () => {
  expect(isEmail("test@example.photography")).toBe(false);
});

// Strong password 
test('valid strong password', () => {
  expect(isStrongPassword("aBc123_")).toBe(true); // Starts with a letter, has 4+ characters
});

test('invalid password', () => {
  expect(isStrongPassword("12")).toBe(false); // Doesn't match minimum length (4 characters)
});

test('valid strong password', () => {
  expect(isStrongPassword("Abc123456789_")).toBe(true); // 15 characters with allowed structure
});

test('invalid password', () => {
  expect(isStrongPassword("Ab123456989898989897890_1")).toBe(false); // More than 15 characters
});

// Date
test('valid date', () => {
  expect(isDate('12/25/2020')).toBe(true);
});

test('valid date', () => {
  expect(isDate('1/1/2021')).toBe(true);
});

test('invalid date', () => {
  expect(isDate('35/23/220')).toBe(false);
});

test('invalid date', () => {
  expect(isDate('12/32/20')).toBe(false);
});

// Hexcolor
test('valid hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('valid hex color', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('invalid hex color', () => {
  expect(isHexColor('#1234')).toBe(false);
});

test('invalid hex color', () => {
  expect(isHexColor('#GGG')).toBe(false);
});
