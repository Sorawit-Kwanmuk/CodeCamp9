const axios = require('axios');

// axios({ url: 'https://jsonplaceholder.typicode.com/posts', method: 'GET' })
//   .then(response => {
//     console.log(response.status); //200 แปรว่าทำงานสำเร็จ
//     console.log(response.statusText); //OK แปรว่าทำงานสำเร็จ
//     console.log(response.headers);
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const main = async () => {
  try {
    // const response = await axios('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'GET',
    // });
    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    // const response = await axios.delete('https://jsonplaceholder.typicode.com/todos/1');
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/2/comments'
    );
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
  } catch (error) {
    console.log(error);
  }
};

main();
