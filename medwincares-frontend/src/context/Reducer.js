const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        doctor: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        doctor: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        doctor: null,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default Reducer;
