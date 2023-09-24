import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://real-pear-fly-kilt.cyclic.app',
  headers: {
    Accept: 'application/json',
    Authorization : "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGRkOWM0ODRjNWI0NzAwMWNjNDg5YmIiLCJpZCI6IjY0ZGQ5YzQ4NGM1YjQ3MDAxY2M0ODliYiIsImlhdCI6MTY5NTM1ODE3MiwiZXhwIjoxNjk1MzU5MDcyfQ.fQYGlJ-rPQ52GNWpoieStYJahfG3OE-2ZIWwafabaFs"
  },
});

export default authFetch;