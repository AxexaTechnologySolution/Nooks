// const functions = require("firebase-functions");
// const nodemailer = require("nodemailer");

// // Initialize the transporter using your email provider's SMTP details
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "ceitajaysundar25@gmail.com", // Replace with your email
//     pass: "wnwr gupq rjzi halb", // Replace with your App Password
//   },
// });

// // Cloud Function to send an email
// exports.sendEmail = functions.https.onRequest(async (req, res) => {
//   const { company, name, phone, email, description } = req.body;

//   const mailOptions = {
//     from: "ceitajaysundar25@gmail.com", // Replace with your email
//     to: "ajaysundarmurugaiyan@gmail.com", // Replace with recipient's email
//     subject: "Contact Form",
//     text: `Company: ${company}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nDescription: ${description}`,
//   };

//   // Send the email
//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).send("Email sent successfully");
//   } catch (error) {
//     res.status(500).send("Error sending email: " + error.toString());
//   }
// });
