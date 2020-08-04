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
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
      }
    default:
      return state;
  };
};

export default reducer;