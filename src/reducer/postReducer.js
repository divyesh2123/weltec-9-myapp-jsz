const initialState = {

    isLoading : false,
    Suc : {},
    fail :{}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'ADD_POST':
    return { ...state,isLoading: true }

    case 'ADD_POST_SUC':
        return { ...state,isLoading: false,Suc: payload }

        case 'ADD_POST_FAIL':
            return { ...state,isLoading: false,fail:payload }

  default:
    return state
  }
}
