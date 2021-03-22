import { SET_NAVBAR_LINKS, SET_HEADER_LINKS } from "./types";

export function setHeaderLinks(links) {
  return {
    type: SET_HEADER_LINKS,
    payload: links,
  };
}

export function setNavbarLinks(links) {
  return {
    type: SET_NAVBAR_LINKS,
    payload: links,
  };
}
