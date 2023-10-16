const url = "https://jsonplaceholder.typicode.com/users";

const fetchGetUsers = () => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};


export const addPost = (data) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export default fetchGetUsers;