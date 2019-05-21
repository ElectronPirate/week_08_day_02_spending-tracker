const transactionsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_XACTION':
    const newState = [...state, action.newItem]
    return newState;
    default:
    return state;
  }
}

export default transactionsReducer;
