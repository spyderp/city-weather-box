import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { weatherBoxReducer } from "./weatherBoxReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    weatherBox: weatherBoxReducer
})
