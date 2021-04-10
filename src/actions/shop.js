import { SET_NAVBAR_LINKS } from "./types";

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
        title: "Colered Decals",
      },
      {
        _id: 2,
        title: "Matte Decals",
      },
      {
        _id: 3,
        title: "Decal Packages",
      },
      {
        _id: 4,
        title: "Custom Decals",
      },
      {
        _id: 5,
        title: "Custom Decals",
      },
      {
        _id: 6,
        title: "Custom Decals",
      },
    ],
  };
}
