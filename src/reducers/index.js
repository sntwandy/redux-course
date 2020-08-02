const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
    case 'LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  };
};

export default reducer;