const isEmptyObj = (obj?: object | null): boolean => {
  if (obj === undefined || obj === null) return true;
  return Object.keys(obj).length === 0;
};

export const common = {
  isEmptyObj,
};
