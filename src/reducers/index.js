import { combineReducers } from "redux";
import authReducer from "./authReducer";
import modalReducer from "./modalReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  modal: modalReducer,
  errors: errorReducer,
});
