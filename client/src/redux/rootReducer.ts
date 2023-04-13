import {combineReducers} from "@reduxjs/toolkit";
import * as userReducer from "./users/users.slice";

/**
 *
 */
const rootReducer = combineReducers({
    [userReducer.userFeatureKey]: userReducer.userSlice.reducer
});
export default rootReducer;