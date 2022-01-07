const getData = () => {
  return fetch('db.json')
  .then(response => response.json())
  .catch(error => console.log(error));
   
};

const sendData = (data) => {
  return fetch ('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).catch(error => console.log(error));
};

getData()
  .then(data => sendData(data))
  .catch(error => console.log(error));
