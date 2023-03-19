import { createReducer } from "@reduxjs/toolkit";
import { setType } from "../actions/pointSlice";

interface TypeState {
  type: string | null;
}

const initialState: TypeState = {
  type: null,
};

const typeReducer = createReducer(initialState, (builder) => {
  builder.addCase(setType, (state, action) => {
    state.type = action.payload;
  });
});

export default typeReducer;
