export const reducer = (state, action) => {
    switch (action.type) {
      case fetchRequest:
        // changeInfo("loading" , true)
        return { ...state, loading: true };
      case fetchSuccess:
        return { ...state, loading: false, props: action.payload };
      case fetchFail:
        // changeInfo("loading" , false)
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };