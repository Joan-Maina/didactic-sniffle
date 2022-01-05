const sendEmail = (req, res) => {
  try {
    let { subject, emailbody } = req.body;
    console.log(subject);
  } catch (error) {
    console.log("joan");
    console.log(error.message);
  }
};

module.exports = { sendEmail };
