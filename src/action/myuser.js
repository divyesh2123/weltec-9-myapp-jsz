export const RequestUser = (payload) => ({
  type: 'USERRQUEST',
  payload
})


export const RequestUserSUC = (payload) => ({
  type: 'USERSUC',
  payload
})

export const RequestUserFail = (payload) => ({
  type: 'USERFAIL',
  payload
})
