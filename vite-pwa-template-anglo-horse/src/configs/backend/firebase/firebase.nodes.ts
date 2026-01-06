import { collection, doc } from "firebase/firestore";
import { fbStore } from "..";

const n = (node: string) => `${import.meta.env.VITE_NODE_PREFIX ?? ""}${node}`;

export const fbNodes = {
  users: n("USERS"),
  userRequest: n("USERS_REQUEST"),
  toteData: n("GRE_TOTE-DATA"),
  toteTenant: n("BOOKMAKERS"),
  toteEvents: n("EVENTS"),
  preferences: n("PREFERENCES"),
  pools: n("POOLS"),
  metadata: n("METADATA"),
  irs_columns: n("IRS_HOLD_EXPORT_COLUMNS"),
  ledger_columns: n("LEDGER_EXPORT_COLUMNS"),
  rebate_columns: n("REBATE_EXPORT_COLUMNS"),
  wager_columns: n("WAGER_EXPORT_COLUMNS"),
};
// Firebase collection and document references.
export const fbRefs = {
  user: (id: string) => doc(fbStore, fbNodes.users, id),
  userRequest: (id: string) => doc(fbStore, fbNodes.userRequest, id),
  toteTenants: () =>
    collection(
      fbStore,
      fbNodes.toteData,
      fbNodes.toteTenant,
      fbNodes.toteTenant
    ),
  toteEvents: () =>
    collection(
      fbStore,
      fbNodes.toteData,
      fbNodes.toteEvents,
      fbNodes.toteEvents
    ),
  preferences: (uid: string, preferenceNode: string) =>
    doc(fbStore, fbNodes?.users, uid, fbNodes.preferences, preferenceNode),
  pools: (uid: string) =>
    doc(fbStore, fbNodes?.users, uid, fbNodes.preferences, fbNodes.pools),
  column_preferences: (preferenceNode: string) =>
    doc(fbStore, fbNodes?.metadata, preferenceNode),
};
