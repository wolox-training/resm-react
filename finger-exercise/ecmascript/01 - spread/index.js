import isArray from './utils';

export function min(...args) {
  if (!isArray(args) && args.length === 1) {
    const [param] = [...args];
    return param;
  }
  return Math.min(...args);
}

export function copy() {

}
