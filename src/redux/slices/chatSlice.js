import { createSlice } from "@reduxjs/toolkit";
import { OFF_SET_LIVE_CHAT } from "../../Constant";
const initialState = {
    messages:[],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessages: (state,action)=>{
      state.messages.splice(OFF_SET_LIVE_CHAT,1);
        state.messages.push(action.payload);
    }
  },
});

export const { addMessages } = chatSlice.actions;

export default chatSlice.reducer;
