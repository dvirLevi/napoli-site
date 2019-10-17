const url = 'https://my-mail-service.herokuapp.com';
// const url = 'http://localhost:3000';


class postService {

    static sendMail(obj) {
        return new Promise(async (resolve, reject) => {
            try {
                const objtojson = JSON.stringify(obj);
                const response = await fetch(url + '/sendMail', {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: objtojson
                });
                const json = await response.json();
                console.log(json)
                resolve()
            } catch (err) {
                reject(err)
            }
        })
    }

}

export default postService