import Swal from 'sweetalert2'

const myMail = {
  fetchMail(obj) {
    return new Promise(async (resolve, reject) => {
      try {
        const objtojson = JSON.stringify(obj);
        const response = await fetch('https://my-mail-service.herokuapp.com/sendMail', {
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
  async sendToMail(objContent) {
    try {
      // להעיר את השרת
      const response = await fetch('https://my-mail-service.herokuapp.com/WakeUpGet');
      const json = await response.json();
      console.log(json)
      // שליחת הנתונים לשרת

      let contentMail = {
        from: "napoli@napoli.com",
        // to: "boazlevy100@gmail.com",
        to: "dvirleviapp@gmail.com",
        subject: "napoli-oven",
        html: `<p>
  שם מלא: ${this.clientDatdlis.name} <br>
  טלפון: ${this.clientDatdlis.tel} <br>
  מייל: ${this.clientDatdlis.mail} <br>
  הערות: ${this.clientDatdlis.note} <br>
  אישור קבלת מיילים: ${this.ifConfirm} <br>
  </p>`,
      }
      let res = await this.fetchMail(contentMail)
      console.log(res + "(:")
      await Swal.fire({
        type: 'success',
        title: 'יופי',
        text: 'ההודעה נשלחה בהצלחה!',
        timer: 1500
      });
      fbq('trackCustom', 'Contact');
      this.clientDatdlis = {};
    } catch (err) {
      await Swal.fire({
        type: 'error',
        title: 'אופס',
        text: 'ההודעה לא נשלחה',
        timer: 1500
      })
    }
  }

}


export default myMail