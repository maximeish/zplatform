import { DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { useRef } from "react";
import PasswordField from "../inputs/PasswordField";
import SubmitButton from "../inputs/SubmitButton";
// import { useSelector } from "react-redux";
import Modal from "../../Modal";
import { useState } from "react";

const ChangePassword = (props) => {
  const { setPassOpen } = props;
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [isOpen] = useState(true);
  // const { user } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        throw new Error("Passwords do not match");
      }
      setPassOpen(false);
      console.log("Password updating...");
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
            <DialogContentText>
              Please Enter your new Password:
            </DialogContentText>
            <PasswordField {...{ passwordRef }} />
            <PasswordField
              {...{
                passwordRef: confirmPasswordRef,
                id: "confirmPassword",
                label: "Confirm Password",
              }}
            />
          </DialogContent>
          <DialogActions>
            <SubmitButton />
          </DialogActions>
        </form>
      }
      title="Update Password"
    />
  );
};

export default ChangePassword;
