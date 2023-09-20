const nodemailer = require("nodemailer");
require("dotenv").config();

const emailRegister = async (data) => {
    const { email, name, token } = data;
  
    // Se crea un objeto transport utilizando nodemailer.createTransport(). Este objeto se configura con los datos de autenticación del servidor de correo electrónico (host, puerto, usuario y contraseña) que se obtienen de las variables de entorno (process.env).
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    //Informacion del email
  
    // A continuación, se define un objeto info que contiene la información del correo electrónico a enviar. El correo electrónico incluye un remitente, destinatario, asunto, texto plano y contenido HTML. Se utiliza el enlace ${process.env.FRONTEND_URL}/confirmar/${token} para generar un enlace de confirmación de cuenta en el contenido HTML del correo electrónico. El token se inserta en el enlace y se enviará al usuario para que pueda confirmar su cuenta haciendo clic en él.
  
    const info = await transport.sendMail({
                from: '"Trendy Tech - Tecnologia de primer nivel" <bienvenidos@trendy-spot.com>',
                to: email,
                subject: "Trendy Tech - Confirma tu cuenta",
                text: "Confirma tu cuenta en Trendy-Tech",
                html: ` <img>
              <p>Hola: ${name}, confirma tu cuenta en Trendy Tech</p>
                  <p>Tu cuenta ya esta casi lista, solo debes comprobarla haciendo click en el siguiente enlace</p>
  
                  <a href="${process.env.FRONTEND_URL}/confirm/${token}">Confirmar Cuenta</a>
  
                  <p>Si tu no reconoces este mail, por favor ignora este mensaje</p>
              `,
    });
  };
  
  const emailForgetPassword = async (data) => {
    const { email, name, token } = data;
  
    // Se crea un objeto transport utilizando nodemailer.createTransport(). Este objeto se configura con los datos de autenticación del servidor de correo electrónico (host, puerto, usuario y contraseña) que se obtienen de las variables de entorno (process.env).
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    //Informacion del email
    // A continuación, se define un objeto info que contiene la información del correo electrónico a enviar. El correo electrónico incluye un remitente, destinatario, asunto, texto plano y contenido HTML. Se utiliza el enlace ${process.env.FRONTEND_URL}/confirmar/${token} para generar un enlace de confirmación de cuenta en el contenido HTML del correo electrónico. El token se inserta en el enlace y se enviará al usuario para que pueda confirmar su cuenta haciendo clic en él.
  
    const info = await transport.sendMail({
                from: '"Trendy Tech - Tienda de ropa" <cuentas@trendy-tech.com>',
                to: email,
                subject: "Trendy Tech - Recupera tu cuenta",
                text: "Recupera tu cuenta en Trendy-Tech",
                html: `<p>Hola: ${name}, recupera tu cuenta en Trendy Tech</p>
            
                <a href="${process.env.FRONTEND_URL}/new-password/${token}">Ingresa aqui para reestablecer tu password</a>
  
                <p>Si no solicitaste esta petición ignora este mensaje</p>
            `,
    });
  };
  
  module.exports = {
    emailRegister,
    emailForgetPassword,
  };