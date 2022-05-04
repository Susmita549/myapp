import { PRODUCT_REQUEST } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
    return{
      
  }
}
};
export { reducer };
