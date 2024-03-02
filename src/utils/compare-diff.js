/* eslint-disable no-restricted-syntax */
import _ from 'lodash';

export default function compareDifference(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2).sort();
  let result = '{';
  for (const key of keys) {
    result = `${result}\n   `;
    if (!Object.hasOwn(obj1, key)) {
      // added
      result = `${result}+ ${key}: ${obj2[key]}`;
    } else if (!Object.hasOwn(obj2, key)) {
      // deleted
      result = `${result}- ${key}: ${obj1[key]}`;
    } else if (obj1[key] !== obj2[key]) {
      result = `${result}- ${key}: ${obj1[key]}`;
      result = `${result}\n   `;
      // changed
      result = `${result}+ ${key}: ${obj2[key]}`;
    } else {
      // unchanged
      result = `${result}  ${key}: ${obj1[key]}`;
    }
  }
  result = `${result}\n}`;
  return result;
}
