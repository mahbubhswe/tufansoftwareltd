import nextConnect from "next-connect";
import nodemailer from "nodemailer";
const handler = nextConnect();
export default handler.post(async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  const sms = {
    from: email,
    to: "recivermailaddress@gmail.com",
    subject: subject,
    text: message,
  };
  nodemailer
    .createTransport({
      port: 465,
      host: "smtp.gmail.com",
      service: "gmail",
      auth: {
        user: "recivermailaddress@gmail.com",
        pass: "reciverMailAddressPass",
      },
    })
    .sendMail(sms, (err) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send("Mail has been sent successfully!");
      }
    });
});
