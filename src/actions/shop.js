import { SET_NAVBAR_LINKS, SET_SHOP_PRODUCTS } from "./types";

export function fetchShopCategories() {
  return {
    type: SET_NAVBAR_LINKS,
    payload: [
      {
        _id: 0,
        title: "All Decals",
      },
      {
        _id: 1,
        title: "Multi-Colored Decals",
      },
      {
        _id: 2,
        title: "Black Decals",
      },
      {
        _id: 3,
        title: "Green Decals",
      },
      {
        _id: 4,
        title: "Orange Decals",
      },
      {
        _id: 5,
        title: "Purple Decals",
      },
      {
        _id: 6,
        title: "Custom Decals",
      },
    ],
  };
}

export function fetchShopProducts() {
  return {
    type: SET_SHOP_PRODUCTS,
    payload: [
      {
        _id: 0,
        title: "Multi-Colored Decals",
        description:
          "With these sets , you can choose a multi-colored design and show off decals with a multitude of colors and design options.",
        price: 2.99,
        belongsTo: [0, 1],
      },
      {
        _id: 1,
        title: "Black Decals",
        description:
          "With these decals , you can choose a multitude of black only decals that will give your design a destictive pop. Also comes in matte finish.",
        price: 1.99,
        belongsTo: [0, 2],
      },
      {
        _id: 2,
        title: "Green Decals",
        description:
          "With these decals , you can choose a multitude of green only decals that will give your design a destictive pop. Also comes in matte finish.",
        price: 1.99,
        belongsTo: [0, 3],
      },
      {
        _id: 3,
        title: "Orange Decals",
        description:
          "With these decals , you can choose a multitude of orange only decals that will give your design a destictive pop. Also comes in matte finish.",
        price: 1.99,
        belongsTo: [0, 4],
      },
      {
        _id: 4,
        title: "Purple Decals",
        description:
          "With these decals , you can choose a multitude of purple only decals that will give your design a destictive pop. Also comes in matte finish.",
        price: 1.99,
        belongsTo: [0, 5],
      },
      {
        _id: 5,
        title: "Custom Decals",
        description:
          "With these decals , you can choose a multitude of custom decals that will allow you to design a custom look using any given color or material needed to give you the design your looking for.",
        price: 3.99,
        belongsTo: [0, 6],
      },
    ],
  };
}
