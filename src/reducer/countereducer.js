const initialState = {}

export default (state = 0, { type, payload }) => {
  switch (type) {

  case 'INC':
    return state+1;

    case 'DEC':
    return state-1;

    case 'BYNUM':
      return state+ parseInt(payload);

  default:
    return state
  }
}
