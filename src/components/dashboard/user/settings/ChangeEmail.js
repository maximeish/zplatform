import { DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { useRef } from "react";
import { useSelector } from "react-redux";
import Modal from "../../Modal";
import EmailField from "../inputs/EmailField";
import SubmitButton from "../inputs/SubmitButton";
import { useState } from "react";

const ChangeEmail = (props) => {
  const { setEmailOpen } = props;
  const [isOpen] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setEmailOpen(false);
      console.log("Email updating...");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={isOpen}
      content={
        <form onSubmit={handleSubmit}>
          <DialogContent dividers>
            <DialogContentText>Please Enter your new email:</DialogContentText>
            <EmailField {...{ emailRef, defaultValue: user?.email }} />
          </DialogContent>
          <DialogActions>
            <SubmitButton />
          </DialogActions>
        </form>
      }
      title="Change Email"
    />
  );
};

export default ChangeEmail;
