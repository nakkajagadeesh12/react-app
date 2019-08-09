const initialState = {
  search: " ",
}

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_UPDATED':
      return {
        search: action.val,
      }
    default:
      return state;
  }
}