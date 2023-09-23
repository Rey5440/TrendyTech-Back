const nodemailer = require("nodemailer");
require("dotenv").config();
const { google } = require("googleapis");

const emailRegister = async (data) => {
    const { email, name, token } = data;
  
    // Se crea un objeto transport utilizando nodemailer.createTransport(). Este objeto se configura con los datos de autenticación del servidor de correo electrónico (host, puerto, usuario y contraseña) que se obtienen de las variables de entorno (process.env).
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    //Informacion del email
  
    // A continuación, se define un objeto info que contiene la información del correo electrónico a enviar. El correo electrónico incluye un remitente, destinatario, asunto, texto plano y contenido HTML. Se utiliza el enlace ${process.env.FRONTEND_URL}/confirmar/${token} para generar un enlace de confirmación de cuenta en el contenido HTML del correo electrónico. El token se inserta en el enlace y se enviará al usuario para que pueda confirmar su cuenta haciendo clic en él.                <p>Hola: ${name}, confirma tu cuenta en Trendy Tech</p>
                // <p>Tu cuenta ya esta casi lista, solo debes comprobarla haciendo click en el siguiente enlace</p>

                // <a href="${process.env.FRONTEND_URL}/confirm/${token}">Confirmar Cuenta</a>

                // <p>Si tu no reconoces este mail, por favor ignora este mensaje</p>
  
    const info = await transport.sendMail({
                from: '"Trendy Tech - Tecnologia de primer nivel" <bienvenidos@trendy-spot.com>',
                to: email,
                subject: "Trendy Tech - Confirma tu cuenta",
                text: "Confirma tu cuenta en Trendy-Tech",
                html: `        
                <body style="word-spacing:normal;background-color:#F4F4F4;">
                <div style="background-color:#F4F4F4;">
                  <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#000000" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                  <div style="background:#000000;background-color:#000000;margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#000000;background-color:#000000;width:100%;">
                      <tbody>
                        <tr>
                          <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                            <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="center" style="font-size:0px;padding:5px 5px;padding-bottom:3px;word-break:break-word;">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                        <tbody>
                                          <tr>
                                            <td style="width:180px;">
                                              <img height="auto" src="https://res.cloudinary.com/dntrwijx5/image/upload/v1695247726/imagenes/xozavdmnoiwyz1w4vegp.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title="" width="180" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="left" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
                                      <div style="font-family:Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#55575d;">
                                        <p style="line-height: 18px; margin: 10px 0; text-align: center;font-size:14px;color:#ffffff;font-family:'Times New Roman',Helvetica,Arial,sans-serif">PROCECADORES&nbsp; &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp;CELULARES&nbsp; &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp;PERIFERICOS</p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if mso | IE]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#000000" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                  <div style="background:#000000;background-color:#000000;margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#000000;background-color:#000000;width:100%;">
                      <tbody>
                        <tr>
                          <td style="direction:ltr;font-size:0px;padding:0 0 0 0;text-align:center;">
                            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                            <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="center" style="font-size:0px;padding:0px 25px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                        <tbody>
                                          <tr>
                                            <td style="width:600px;">
                                              <img height="auto" src="https://res.cloudinary.com/dntrwijx5/image/upload/v1695248228/imagenes/ycwo1sqbrgietd9cfv9g.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title="" width="600" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if mso | IE]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#000000" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                  <div style="background:#000000;background-color:#000000;margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#000000;background-color:#000000;width:100%;">
                      <tbody>
                        <tr>
                          <td style="direction:ltr;font-size:0px;padding:0 0 0 0;text-align:center;">
                            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                            <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="left" style="font-size:0px;padding:10px 25px;padding-top:25px;padding-bottom:5px;word-break:break-word;">
                                      <div style="font-family:Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#55575d;">
                                        <p style="line-height: 60px; text-align: center; margin: 10px 0;font-size:45px;color:#fcfcfc;font-family:'Times New Roman',Helvetica,Arial,sans-serif"><b>Confirma tu cuenta aquí abajo</b></p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if mso | IE]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#000000" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                  <div style="background:#000000;background-color:#000000;margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#000000;background-color:#000000;width:100%;">
                      <tbody>
                        <tr>
                          <td style="direction:ltr;font-size:0px;padding:0 0 0 0;padding-bottom:40px;text-align:center;">
                            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                            <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;padding-bottom:30px;word-break:break-word;">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                        <tr>
                                          <td align="center" bgcolor="#fc6933" role="presentation" style="border:none;border-radius:10px;cursor:auto;mso-padding-alt:10px 25px;background:#fc6933;" valign="middle">
                                            <a href="${process.env.FRONTEND_URL}/confirm/${token}" style="display:inline-block;background:#fc6933;color:#ffffff;font-family:Times New Roman, Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:10px;" target="_blank">
                                              <span style="color:#ffffff">Confirmar</span>
                                            </a>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="left" style="font-size:0px;padding:10px 25px;padding-top:5px;padding-bottom:0px;word-break:break-word;">
                                      <div style="font-family:Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#55575d;">
                                        <p style="line-height: 16px; text-align: center; margin: 10px 0;font-size:15px;color:#ffffff;font-family:'Times New Roman',Helvetica,Arial,sans-serif">* Luego de hacer click en 'Confirmar' se te redirigirá al inicio de tu cuenta en Trendy Tech.</p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if mso | IE]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </div>
              </body>


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
    // A continuación, se define un objeto info que contiene la información del correo electrónico a enviar. El correo electrónico incluye un remitente, destinatario, asunto, texto plano y contenido HTML. Se utiliza el enlace ${process.env.FRONTEND_URL}/Recuperar Contraseña/${token} para generar un enlace de confirmación de cuenta en el contenido HTML del correo electrónico. El token se inserta en el enlace y se enviará al usuario para que pueda Recuperar Contraseña su cuenta haciendo clic en él.
  
    const info = await transport.sendMail({
                from: '"Trendy Tech - Tienda de ropa" <cuentas@trendy-tech.com>',
                to: email,
                subject: "Trendy Tech - Recupera tu cuenta",
                text: "Recupera tu cuenta en Trendy-Tech",
                html: `<p>Hola: ${name}, recupera tu cuenta en Trendy Tech</p>
            
                <a href="${process.env.FRONTEND_URL}/new-password/${token}">Ingresa aqui para reestablecer tu password</a>
  
                <p>Si no solicitaste esta petición ignora este mensaje</p>


                <body style="word-spacing:normal;background-color:#F4F4F4;">
                <div style="background-color:#F4F4F4;">
                  <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#000000" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                  <div style="background:#000000;background-color:#000000;margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#000000;background-color:#000000;width:100%;">
                      <tbody>
                        <tr>
                          <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                            <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="center" style="font-size:0px;padding:5px 5px;padding-bottom:3px;word-break:break-word;">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                        <tbody>
                                          <tr>
                                            <td style="width:180px;">
                                              <img height="auto" src="https://res.cloudinary.com/dntrwijx5/image/upload/v1695247726/imagenes/xozavdmnoiwyz1w4vegp.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title="" width="180" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="left" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
                                      <div style="font-family:Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#55575d;">
                                        <p style="line-height: 18px; margin: 10px 0; text-align: center;font-size:14px;color:#ffffff;font-family:'Times New Roman',Helvetica,Arial,sans-serif">PROCECADORES&nbsp; &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp;CELULARES&nbsp; &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp;PERIFERICOS</p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if mso | IE]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#000000" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                  <div style="background:#000000;background-color:#000000;margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#000000;background-color:#000000;width:100%;">
                      <tbody>
                        <tr>
                          <td style="direction:ltr;font-size:0px;padding:0 0 0 0;text-align:center;">
                            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                            <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="center" style="font-size:0px;padding:0px 25px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                        <tbody>
                                          <tr>
                                            <td style="width:600px;">
                                              <img height="auto" src="https://res.cloudinary.com/dntrwijx5/image/upload/v1695248228/imagenes/ycwo1sqbrgietd9cfv9g.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title="" width="600" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if mso | IE]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#000000" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                  <div style="background:#000000;background-color:#000000;margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#000000;background-color:#000000;width:100%;">
                      <tbody>
                        <tr>
                          <td style="direction:ltr;font-size:0px;padding:0 0 0 0;text-align:center;">
                            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                            <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="left" style="font-size:0px;padding:10px 25px;padding-top:25px;padding-bottom:5px;word-break:break-word;">
                                      <div style="font-family:Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#55575d;">
                                        <p style="line-height: 60px; text-align: center; margin: 10px 0;font-size:45px;color:#fcfcfc;font-family:'Times New Roman',Helvetica,Arial,sans-serif"><b> aquí abajo</b></p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if mso | IE]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#000000" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                  <div style="background:#000000;background-color:#000000;margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#000000;background-color:#000000;width:100%;">
                      <tbody>
                        <tr>
                          <td style="direction:ltr;font-size:0px;padding:0 0 0 0;padding-bottom:40px;text-align:center;">
                            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                            <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;padding-bottom:30px;word-break:break-word;">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                        <tr>
                                          <td align="center" bgcolor="#fc6933" role="presentation" style="border:none;border-radius:10px;cursor:auto;mso-padding-alt:10px 25px;background:#fc6933;" valign="middle">
                                            <a href="${process.env.FRONTEND_URL}/new-password/${token}" style="display:inline-block;background:#fc6933;color:#ffffff;font-family:Times New Roman, Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:10px;" target="_blank">
                                              <span style="color:#ffffff">Recuperar Contraseña</span>
                                            </a>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="left" style="font-size:0px;padding:10px 25px;padding-top:5px;padding-bottom:0px;word-break:break-word;">
                                      <div style="font-family:Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#55575d;">
                                        <p style="line-height: 16px; text-align: center; margin: 10px 0;font-size:15px;color:#ffffff;font-family:'Times New Roman',Helvetica,Arial,sans-serif">* Al hacer click en te redirigira a Trendy Tench para que crear un nuevo password</p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if mso | IE]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </div>
              </body>

            `,
    });
  };
  
  module.exports = {
    emailRegister,
    emailForgetPassword,
  };