// pages/api/enviar-contacto.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Tu configuración de nodemailer
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true para port 465, false para port 587
      auth: {
        user: 'faausc@gmail.com', // ¡Reemplaza con tus credenciales!
        pass: 'qkbjcnmfgxoljgln'  // ¡Reemplaza con tus credenciales!
      },
      tls: {
        rejectUnauthorized: false, // Considera la seguridad en producción
      }
    });

    const mailOptions = {
      from: 'faausc@gmail.com', // ¡Reemplaza con tu correo!
      to: 'faausc@gmail.com', // ¡Reemplaza con la dirección a la que quieres que llegue el mensaje!
      subject: `Nuevo mensaje de contacto: ${subject}`, // Usamos el 'subject' recibido del formulario
      html: `
        <h3>Nuevo Mensaje de Contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Correo de contacto enviado:', info.response);
      res.status(200).json({ message: 'Mensaje enviado correctamente.' });
    } catch (error) {
      console.error('Error al enviar el correo de contacto:', error);
      res.status(500).json({ error: 'Error al enviar el mensaje.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}