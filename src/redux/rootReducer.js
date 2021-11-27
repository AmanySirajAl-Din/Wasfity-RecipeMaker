import { combineReducers } from "redux";
import userReducer from "./reducer";

// I made it for Combine

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
