import { COMMON } from "@common/constants";

const isEmptyObj = (obj?: object | null): boolean => {
  if (obj === undefined || obj === null) return true;
  return Object.keys(obj).length === 0;
};

const getEventType = (code?: string) => (code ? COMMON.eventTypes[code] : code);

export const common = {
  isEmptyObj,
  getEventType,
};
