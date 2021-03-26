export const globalActions = {
  fetchData: "FETCH_PRODUCTS",
  fetchProductsSuccess: "FETCH_PRODUCTS_SUCCESS",
  fetchProductsFailure: "FETCH_PRODUCTS_FAILURE",
  addToCart: "ADD_TO_CART",
};

const loadPoducts = () => ({
  type: globalActions.fetchData,
});

const loadProductsSuccess = (products: any) => ({
  type: globalActions.fetchProductsSuccess,
  payload: {
    products,
  },
});

const loadPoductsFailure = () => ({
  type: globalActions.fetchProductsFailure,
});

export const loadProductFunc = () => {
  return async (dispatch: any) => {
    //change the state of the application by initialting a load sequence
    dispatch(loadPoducts());

    try {
      //send out a network request to fetch the cart products
      const data = await fetch(
        "https://cors-anywhere.herokuapp.com/https://fakestoreapi.com/products"
      );
      const products = await data.json();
      console.log(products);
      dispatch(loadProductsSuccess(products));
    } catch (err) {
      //if an error occured while fetching,
      dispatch(loadPoductsFailure());
      console.log(err.message);
    }
  };
};

interface Payload {
  price: string;
  category: string;
  img: string;
}

//adding loaded data to cart
export const addToCart = (payload: Payload) => ({
  type: globalActions.addToCart,
  payload,
});
