import { globalActions } from "./actions";

// const rootReducer = (state: any, action: any) => {
//   return state;
// };

export interface CartState {
  products: any[];
  cart: any[];
  costumerName: string;
  costumerEmail: string;
  loading: boolean;
  hasError: boolean;
}

const initialState = {
  products: [],
  cart: [],
  costumerName: "",
  costumerEmail: "",
  loading: false,
  hasError: false,
};

const rootReducer = (state: CartState = initialState, action: any) => {
  switch (action.type) {
    case globalActions.fetchData:
      return {
        ...state,
        loading: true,
      };
    case globalActions.fetchProductsSuccess:
      return {
        ...state,
        loading: false,
        hasError: false,
        products: action.payload.products,
      };
    case globalActions.fetchProductsFailure:
      return {
        ...state,
        hasError: true,
        loading: false,
        products: [],
      };
    case globalActions.addToCart:
      return {
        ...state,
       cart: [...state.cart, action.payload]
      };
    // case globalActions.ADD_TO_CART:
    //   return {
    //     ...state,
    //     cart: [action.payload, ...state.cart],
    //   };
    default:
      return state;
  }
};

export default rootReducer;
