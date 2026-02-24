import { doc } from "firebase/firestore";
import { fbStore } from "..";

const n = (node: string) => `${import.meta.env.VITE_NODE_PREFIX ?? ""}${node}`;

export const fbNodes = {
  users: n("USERS"),
};
// Firebase collection and document references.
export const fbRefs = {
  user: (id: string) => doc(fbStore, fbNodes.users, id),
};
