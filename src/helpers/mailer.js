
// export const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//       user: "tomaslona888@gmail.com",
//       pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
//     },
//   });

  const refresh = '1//04TK62DMc1Xz2CgYIARAAGAQSNwF-L9IrcZTTn9xYERwjLwVXnJjS1eyxlpyObqDqV3TtmhssIhJncKbqO62p2uC4jNcpzILs4h4'

  const idcliente = '499265298198-u50eas93ge6smbvo5i34dgtqadc9qpua.apps.googleusercontent.com'

  const secretcliente = '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'

const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const ID_APP_1 = 499265298198-u50eas93ge6smbvo5i34dgtqadc9qpua.apps.googleusercontent.com

const accountTransport = require("./account_transport.json");

const mail_rover = async (callback) => {
    const oauth2Client = new OAuth2(
        accountTransport.auth.clientId,
        accountTransport.auth.clientSecret,
        "https://developers.google.com/oauthplayground",
    );
    oauth2Client.setCredentials({
        refresh_token: accountTransport.auth.refreshToken,
        tls: {
            rejectUnauthorized: false
        }
    });
    oauth2Client.getAccessToken((err, token) => {
        if (err)
            return console.log(err);;
        accountTransport.auth.accessToken = token;
        callback(nodemailer.createTransport(accountTransport));
    });
};



function send(idAplicativo, calback) {
    var id = 0;
    try {
        var id = parseInt(idAplicativo);
    } catch (error) {
        console.log(`error parse idAplicativo feedback.js ${error}`)
    }
    mail_rover(function (emailTransporter) {
        switch (id) {
            case _ID_APP_1:
                json = {
                    url: _SERVER + 'check/', mail: emailTransporter, app: 'CHECK', from: 'Check <check@planck.biz>',
                    to: 'CHECK <check@planck.biz>',
                    slogan: '😋 Comida exquisita, entregas simples. 🛵 Compra YA! 👇🏻',
                    body_bienvanida: 'Mensaje personalizado', head_bienvanida: 'En Check pide a tu local favorito, o chatea con un asesor por medicina, y te lo llevamos lo antes posible.',
                    bcc: 'Info <planck.biz@gmail.com>', head: head, footer: footer
                };
                return calback(json);
            default:
                json = {
                    url: _SERVER + 'check/', mail: emailTransporter, app: 'CHECK', from: 'Check <check@planck.biz>',
                    to: 'CHECK <check@planck.biz>',
                    slogan: '😋 Comida exquisita, entregas simples. 🛵 Compra YA! 👇🏻',
                    body_bienvanida: 'Mensaje personalizado', head_bienvanida: 'En Check pide a tu local favorito, o chatea con un asesor por medicina, y te lo llevamos lo antes posible.',
                    bcc: 'Info <planck.biz@gmail.com>', head: head, footer: footer
                };
                return calback(json);
        }
    });
}

module.exports = {
    mail_rover,
    send
}



//   {
//     "service": "gmail",
//     "auth": {
//       "type": "OAuth2",
//       "user": "TU_CORREO___OJO____@gmail.com",
//       "clientId": "499265298198-u50eas93ge6smbvo5i34dgtqadc9qpua.apps.googleusercontent.com",
//       "clientSecret": "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",
//       "refreshToken": "1//04TK62DMc1Xz2CgYIARAAGAQSNwF-L9IrcZTTn9xYERwjLwVXnJjS1eyxlpyObqDqV3TtmhssIhJncKbqO62p2uC4jNcpzILs4h4"
//     }
//   }
  