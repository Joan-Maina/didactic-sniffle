import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendEmail } from "../redux/action";
import "../styles/Contact.css";

function Contact() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    subject: "",
    emailbody: "",
  });
  const handleChange = (e) => {
    const emailDetails = { ...data };
    emailDetails[e.target.id] = e.target.value;
    setData(emailDetails);
    console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendEmail(data));
  };
  return (
    <div>
      <form className="contactform" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          placeholder="Enter email subject.."
          id="subject"
          value={data.subject}
          required
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="emailbody">Email body</label>

        <textarea
          type="text"
          rows="4"
          cols="50"
          id="emailbody"
          placeholder="Enter email body here.."
          value={data.emailbody}
          onChange={(e) => handleChange(e)}
          required
        ></textarea>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default Contact;
