import { SET_USER_PURCHASES } from "./types";

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        title: "Coding in Progress",
        amount: 8.02,
      },
      {
        _id: 1,
        title: "Purchase 1",
        amount: 4.67,
      },
    ],
  };
}
