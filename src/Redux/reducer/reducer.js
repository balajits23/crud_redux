let initialState = {
  users: [],
  user: [],
  del: [],
  edit: [],
  getId: [],
};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "POST_USERS":
      return {
        ...state,
        user: action.payload,
      };
    case "DEL_USERS":
      return {
        ...state,
        del: action.payload,
      };
    case "EDIT_USERS":
      return {
        ...state,
        edit: action.payload,
      };
    case "GET_ID":
      return {
        ...state,
        getId: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
