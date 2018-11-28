import Immutable from 'seamless-immutable';

export const loadState = (name, defaultInitialState) => {
  try {
    const serializedData = localStorage.getItem(name);
    if (serializedData === null) {
      return defaultInitialState;
    }
    return Immutable(JSON.parse(serializedData));
  } catch (error) {
    return defaultInitialState;
  }
};

export const saveState = (name, value) => {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(name, serializedData);
  } catch (error) {
    // TODO: delete console.log
    // eslint-disable-next-line
    console.log(error);
  }
};

export const removeState = name => {
  localStorage.removeItem(name);
};

export const localStorageManage = { loadState, saveState, removeState };

export default localStorageManage;
