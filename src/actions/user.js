import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 4.76,
        orderNumber: "A00465793",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Rhett Schafrath",
          shippingAddress: "1234 North Point Street",
        },
      },
      {
        _id: 1,
        total: 14.46,
        orderNumber: "A00976473",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Veda Schafrath",
          shippingAddress: "1234 South Point Street",
        },
      },
      {
        _id: 2,
        total: 6.76,
        orderNumber: "A98647326",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Caroline Schafrath",
          shippingAddress: "1234 East Point Street",
        },
      },
      {
        _id: 3,
        total: 15.76,
        orderNumber: "A95362716",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Caleb Schafrath",
          shippingAddress: "1234 West Point Street",
        },
      },
      {
        _id: 4,
        total: 24.16,
        orderNumber: "A54672916",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Cy Schafrath",
          shippingAddress: "1234 Columbus Street",
        },
      },
      {
        _id: 5,
        total: 13.56,
        orderNumber: "A32785395",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Clete Schafrath",
          shippingAddress: "1234 North Atlanta Street",
        },
      },
      {
        _id: 6,
        total: 1.76,
        orderNumber: "A37285640",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Carmi Schafrath",
          shippingAddress: "1234 North South Street",
        },
      },
      {
        _id: 7,
        total: 35.46,
        orderNumber: "A12647839",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Mike Schafrath",
          shippingAddress: "1234 North High Street",
        },
      },
    ],
  };
}
