import isArray from './utils';

export function min(...args) {
  if (args.length === 0) {
    return undefined;
  } else if (args.length === 1) {
    const [param] = [...args];
    if (isArray(param)) {
      return Math.min(...param);
    }
    return param;
  }
  return Math.min(...args);
}

export function copy() {

}
