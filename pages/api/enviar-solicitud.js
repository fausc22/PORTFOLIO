// pages/api/enviar-solicitud.js
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
           user: 'faausc@gmail.com',
           pass: 'qkbjcnmfgxoljgln'
        },
         tls: {
            rejectUnauthorized: false, // Esto puede ser necesario si estás teniendo problemas con certificados
        }
    });

    const mailOptions = {
      from: 'faausc@gmail.com', // Usaremos variables de entorno
      to: 'faausc@gmail.com', // La dirección a la que quieres que llegue el correo
      subject: `Nueva solicitud de proyecto: ${subject}`,
      html: `
        <h3>Nueva Solicitud de Proyecto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tipo de Proyecto:</strong> ${subject}</p>
        <p><strong>Descripción:</strong> ${message}</p>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Correo enviado:', info.response);
      res.status(200).json({ message: 'Solicitud enviada correctamente.' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ error: 'Error al enviar la solicitud.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}