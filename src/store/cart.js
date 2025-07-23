import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { showCart: true, items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.price * existingItem.quantity;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
        });}},
     incrementItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.quantity * existingItem.price;
      }

    },
    decrementItem(state, action) {
  const id = action.payload;
  const existingItem = state.items.find(item => item.id === id);

  if (!existingItem) return;

  if (existingItem.quantity === 1) {
    state.items = state.items.filter(item => item.id !== id);
  } else {
    existingItem.quantity--;
    existingItem.total = existingItem.quantity * existingItem.price;
  }
}
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;