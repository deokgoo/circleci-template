import axios from 'axios';

export function callTestApi() {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: 'http://localhost:8081',
    })
      .then(function (res) {
        resolve(res)
      }).catch(function (err) {
      reject(err);
    });
  })
}