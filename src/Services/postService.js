import mainVar from '../helpers/mainVar.js'

const url = mainVar.server;

const postService = {
    async post(path, obj) {
        try {
          const response = await fetch(url + path, {
            method: 'post',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
          });
          const json = await response.json();
          return json
        } catch (err) {
          console.log(err)
          return false;
        }
    },
    // get(path) {
    //   return new Promise(async (resolve, reject) => {
    //     try {
    //       const myHeaders = {
    //         "Content-Type": "application/json",
    //       }
    //       const response = await fetch(url + path, {
    //         method: 'get',
    //         headers: myHeaders,
    //         // body: objtojson
    //       });
    //       const json = await response.json();
    //       // return json
    //       resolve(json)
    //     } catch (err) {
    //       reject(err)
    //     }
    //   })
    // },
  }
  
  export default postService