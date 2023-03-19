import { createReducer } from "@reduxjs/toolkit";
import { setUserId } from "../actions/userSlice";

interface UserState {
  id: string | null;
  code: string;
}

const initialState: UserState = {
  id: null,
  code: "",
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserId, (state, action) => {
    state.id = action.payload;
    state.code = action.payload;
  });
});

export default userReducer;
