import Swal from 'sweetalert2'

const myMail = {
  // url: 'http://localhost:3000',
  url: 'https://my-mail-service.herokuapp.com',
  fetchMail(obj) {
    return new Promise(async (resolve, reject) => {
      try {
        const objtojson = JSON.stringify(obj);
        console.log(objtojson)
        const response = await fetch(this.url+'/sendMail', {
          method: 'post',
          headers: {
            "Content-Type": "application/json",
          },
          body: objtojson
        });
        const json = await response.json();
        resolve(json)
      } catch (err) {
        reject(err)
      }
    })
  },
  sendToMail(objContent, imgContent, subject) {
    return new Promise(async (resolve, reject) => {
      try {
        // להעיר את השרת
        const response = await fetch(this.url+ '/WakeUpGet');
        const json = await response.json();
        console.log(json)
        // שליחת הנתונים לשרת
        let arrContent = this.objToArray(objContent);
        let htmlString = "";
        for (let i in arrContent) {
          htmlString += `${arrContent[i][0]}: ${arrContent[i][1]}<br>`
        }
        let contentMail = {
          from: "mitkonenet@mitkonenet.com",
          to: "boazlevy100@gmail.com",
          subject: subject,
          html: `<p>${htmlString}</p>`,
        }
        if (imgContent) {
          contentMail.img = imgContent;
        }
        let res = await this.fetchMail({contentMail})
        resolve(res)
        // console.log(res + "(:")
        await Swal.fire({
          type: 'success',
          title: 'יופי',
          text: 'ההודעה נשלחה בהצלחה!',
          timer: 1500
        });
      } catch (err) {
        reject(err)
        await Swal.fire({
          type: 'error',
          title: 'אופס',
          text: 'ההודעה לא נשלחה',
          timer: 1500
        })
      }
    })
  },
  objToArray(obj) {
    let arr = Object.keys(obj).map((key) => {
      return [key, obj[key]];
    });
    return arr
  }

}


export default myMail