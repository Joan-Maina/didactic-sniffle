import { EMAIL_SENT_FAILED, EMAIL_SENT_SUCCESSFUL } from "../types";
const initialState = { error: "", message: "" };

const emailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EMAIL_SENT_FAILED:
      return {
        ...state,
        message: "",
        error: payload,
      };
    case EMAIL_SENT_SUCCESSFUL:
      return {
        ...state,
        error: "",
        message: payload,
      };
    default:
      break;
  }
};
export default emailReducer;
