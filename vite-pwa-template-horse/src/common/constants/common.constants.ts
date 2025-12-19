import dayjs from "dayjs";

// Pagination page sizes for components, "default" is same for all, otherwise add as per component needs.
const pageSize = {
  default: 100, // ! CAUTION: DO NOT CHANGE. INSTEAD ADD A NEW KEY FOR PARTICULAR COMPONENT/MODULE
  customers: 100,
  ledger: 100,
  wager: 100,
  search: 100,
  irs: 100,
  withDraw: 100,
  request: 100,
  kycLogs: 100,
};

const eventTypes: Record<string, string> = {
  TH: "Thoroughbred",
  HS: "Harness",
  DO: "Greyhound",
};

const queryLength = 2;

const date = {
  defaultDate: [dayjs(), dayjs()],
};

const node = {
  path: "APP_METADATA",
};

export const COMMON = {
  pageSize,
  eventTypes,
  queryLength,
  pageSizeOptions: [5, 10, 20, 50, 100],
  date,
  node,
};

const userName = "USERS";

const DOWNLOAD_FILES = "DOWNLOADS";

export const NODE = {
  userName,
  DOWNLOAD_FILES,
};
