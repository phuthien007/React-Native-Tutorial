import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in cart!`
        );
      }
      state.items = newCart;
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = ({ cart }) => cart.items;

export const selectCardItemById = (state, id) =>
  state.cart.items.filter((item) => item.id === id);

export const selectCardTotal = ({ cart }) =>
  cart.items.reduce((total, item) => (total = total + item.price), 0);

export default cartSlice.reducer;
