import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {

        
      const removedArray= state.items.filter((item)=>item.card.info.id!== action.payload.card.info.id)
return{items:removedArray}
    },

    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
