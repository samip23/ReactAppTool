const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {

    let subjectHeader = req.body.subjectHeader;

    console.log(subjectHeader);

    const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</l1>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `;

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      tls: { rejectUnauthorized: false },
      auth: {
        user: "randy.mann@ethereal.email",
        pass: "Wct5DgEDMpke5t2VFd",
      },
    });

    let mailOptions = {
      from: "test@testaccount.com",
      to: "randy.mann@ethereal.email",
      replyTo: "test@testaccount.com",
      subject: subjectHeader,
      text: req.body.message,
      html: htmlEmail,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }

      console.log("Message sent: $s", info.message);
      console.log("Message URL: $s", nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
