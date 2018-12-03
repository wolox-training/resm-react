export const loadState = (name, defaultValue) => {
  try {
    const value = localStorage.getItem(name);
    if (!value) {
      return defaultValue;
    }
    return value;
  } catch (error) {
    return defaultValue;
  }
};

export const saveState = (name, value) => {
  try {
    localStorage.setItem(name, value);
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
