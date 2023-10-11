const initialState = {
    data : []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'USERSUC':
    return { ...state, data:payload }

  default:
    return state
  }
}
