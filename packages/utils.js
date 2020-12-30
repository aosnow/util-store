// ------------------------------------------------------------------------------
// name: types
// author: mudas( mschool.tech )
// created: 2020/11/24 16:47
// ------------------------------------------------------------------------------

const toString = Object.prototype.toString;
const objectTag = '[object Object]';

export function isObjectLike(value) {
  return value != null && typeof value === 'object';
}

export function isPlainObject(value) {
  if (!isObjectLike(value)) return false;
  return value !== null && value !== undefined && toString.call(value) === objectTag;
}

export function isString(value) {
  return typeof value === 'string';
}

export function isNumber(value) {
  return typeof value === 'number';
}

export function isBoolean(value) {
  return typeof true === 'boolean';
}

export function isNull(value) {
  return value === null;
}

export function isArray(value) {
  return Array.isArray(value);
}

export function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val);
}

export function isDefined(val) {
  return val !== undefined && val !== null;
}

export function isNaN(val) {
  if (Number.isNaN) {
    return Number.isNaN(val);
  }

  // eslint-disable-next-line no-self-compare
  return val !== val;
}

export function isBase64Data(url) {
  return /^data:image\/\w+;base64/i.test(url);
}

export function isAbsoluteUrl(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//"
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
