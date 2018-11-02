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

export function copy(obj) {
  let newObj;
  if (isArray(obj)) {
    newObj = [...obj];
  } else {
    newObj = { ...obj };
  }
  return newObj;
}

export function reverseMerge(array1, array2) {
  const newArray = [...array2, ...array1];
  return newArray;
}

export function filterAttribs(obj) {
  const newObj = { ...obj };
  delete newObj.a;
  delete newObj.b;
  return newObj;
}
