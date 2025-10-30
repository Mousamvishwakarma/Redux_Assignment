import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartActions";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;
      if (!item || typeof item.id === "undefined") {
        console.warn("ADD_TO_CART payload missing id:", item);
        return state;
      }
      const exists = state.cartItems.find((i) => i.id === item.id);
      if (exists) {
        
        return {
          ...state,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.id !== action.payload),
      };

    default:
      return state;
  }
};
