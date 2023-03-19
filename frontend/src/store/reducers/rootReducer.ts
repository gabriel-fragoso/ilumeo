import { combineReducers } from "redux";
import userReducer from "./userSlice";
import typeReducer from "./typeSlice";

const rootReducer = combineReducers({
  user: userReducer,
  type: typeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
