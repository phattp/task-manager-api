const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "phatt@hookly.co",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "phatt@hookly.co",
    subject: "Sorry to see you go...",
    text: `Please tell us before you go ${name}. Why you want to cancel?`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
