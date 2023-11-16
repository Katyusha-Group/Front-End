const fetchRequest = "FETC_REQUEST";
const fetchSuccess = "FETCH_SUCCESS";
const fetchFail = "FETCH_FAIL";

export const reducer = (state, action) => {
    switch (action.type) {
      case fetchRequest:
        return { ...state, loading: true };
      case fetchSuccess:
        return { ...state, loading: false, props: action.payload };
      case fetchFail:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };