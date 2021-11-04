import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // this middleware logger I see it in youtube
import thunk from "redux-thunk"; // this middleware thunk
import rootReducer from "./rootReducer"; // it's combine

const middleware = [thunk];
//this process.env.NODE_ENV built in react with server help to use middleware logger
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
