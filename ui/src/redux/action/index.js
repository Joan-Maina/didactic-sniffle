import { EMAIL_SENT_FAILED, EMAIL_SENT_SUCCESSFUL } from "../types";
import axios from "axios";

export const sendEmail =
  ({ subject, emailbody }) =>
  async (dispatch) => {
    console.log(subject);
    console.log(emailbody);
    try {
      const { data } = await axios.post("http://localhost:8000/email/send", {
        subject,
        emailbody,
      });
      console.log(data);
      dispatch({ type: EMAIL_SENT_SUCCESSFUL, payload: data });
    } catch (error) {
      dispatch({ type: EMAIL_SENT_FAILED, payload: error.message });
    }
  };
