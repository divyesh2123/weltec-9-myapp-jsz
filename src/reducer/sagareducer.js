const initialState = {

    isLoading: false,
    data : [],
    error:{}

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'GET_USERS_SUCCESS':
    return { ...state, data: payload,isLoading : false }

 case 'GET_USERS_FAILED':
    return { ...state, error:payload, isLoading: false }

    case 'GET_USERS_REQUESTED':
        return { ...state, isLoading:true }
    


  default:
    return state
  }
}
