import { combineReducers } from "redux";
import baseReducer from "./reducers/base";

const allReducers = combineReducers({
    baseReducer
});

export default allReducers;
