const cloneObject = <T extends Record<any, any>>(obj: T) => {
  const clone = {} as T;
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      clone[key] = cloneObject(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }

  return clone;
};

export { cloneObject };
