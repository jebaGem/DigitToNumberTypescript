import React from 'react';
import App from './App';
import {inWords} from './DigitToWord';
import {getValue} from './Validate';
import {  cleanup } from "@testing-library/react";
import {MessageConstant} from './MessageConstant';

afterEach(cleanup);
/* Test cases for Positive flow Starts*/
test('should display 1 as one ', () => {
  expect(inWords('1')).toBe('one ');
})
test('should display 12 as twelve ', () => {
  expect(inWords('12')).toBe('twelve ');
})
test('should display 99, as ninety nine ', () => {
  expect(inWords('99,')).toBe('ninety nine ');
})
/* Test cases for Positive flow Ends*/

/* Test cases for Negative flow Starts*/
test('should display message for string and special characters', () => {
  expect(getValue('dfklf,')).toEqual({
      "msg": MessageConstant.ONLY_NUMBER,
      "valid": false
  });
})

test('should display message for negative number ', () => {
  expect(getValue('-23')).toEqual({
      "msg": MessageConstant.NEGATIVE_NUMBER_NOT_ALLOWED,
      "valid": false
  });
})

test('should display message for value greater than 99999', () => {
  expect(getValue('9999999')).toEqual({
      "msg": MessageConstant.RANGE_ERROR,
      "valid": false
  });
})
/* Test cases for Negative flow Ends*/

