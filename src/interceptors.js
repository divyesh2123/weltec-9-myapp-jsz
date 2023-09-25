import axios from "axios";

const authFetchWithInterSepetor = axios.create( {
baseURL : "https://real-pear-fly-kilt.cyclic.app"
     
})



  
authFetchWithInterSepetor.interceptors.request.use(
    (request) => {

      
      request.headers['Accept'] = 'application/json';
      request.headers['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGRkOWM0ODRjNWI0NzAwMWNjNDg5YmIiLCJpZCI6IjY0ZGQ5YzQ4NGM1YjQ3MDAxY2M0ODliYiIsImlhdCI6MTY5NTYxNDQ1NywiZXhwIjoxNjk1NjE1MzU3fQ.3NLUo9Lw7u5uNZncoCr6ERkxigszUvx9XpMOwE-VkCE`
      console.log('request sent');
      return request;
    },
    (error) => {
      //to handle or save data in cloud
      return Promise.reject(error);
    }
  );
  
  authFetchWithInterSepetor.interceptors.response.use(
    (response) => {
      console.log('got response');
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 404) {
        // do something
        console.log('NOT FOUND');
      }
      if (error.response.status === 401) {
        // do something
        console.log('NOT FOUND');
      }
      return Promise.reject(error);
    }
  );
  

export default authFetchWithInterSepetor;