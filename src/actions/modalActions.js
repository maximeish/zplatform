import { SET_MODAL_PROPS } from "./types";

// Set modal props
export const setModal = (payload) => {
  return {
    type: SET_MODAL_PROPS,
    payload,
  };
};

// Get modal props
export const getModal = () => {
  return {
    type: SET_MODAL_PROPS,
  };
};
