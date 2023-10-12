const initialState = {
    isLoading: false,
    data: [],
    error:{}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'USERRQUEST':
    return { ...state,  isLoading:true}
    case 'USERSUC':
        return { ...state,  isLoading:false,data:payload }

        case 'USERFAIL':
    return { ...state,  isLoading:false,error:payload}

  default:
    return state
  }
}
