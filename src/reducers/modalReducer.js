import { SET_MODAL_PROPS } from "../actions/types";

const initialState = {
  open: false,
  content: <></>,
  title: "",
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_PROPS:
      return {
        ...state,
        open: action.payload.open,
        content: action.payload.content,
        title: action.payload.title,
      };
    default:
      return state;
  }
};

export default modalReducer;
