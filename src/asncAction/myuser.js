import axios from "axios";
import { RequestUser, RequestUserFail, RequestUserSUC } from "../action/myuser";


export  const getUser = () => {
    return (dispatch) => {     //nameless functions
      
        dispatch(RequestUser());
      // Return promise with success and failure actions
      return axios.get('https://jsonplaceholder.typicode.com/users').then(  
        user => dispatch(RequestUserSUC(user.data)),
        err => dispatch(RequestUserFail(err))
      );
    };
  };