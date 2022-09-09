import { Send } from "@mui/icons-material";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useSelector } from "react-redux";
import Modal from "../../Modal";
import { useState } from "react";

const DeleteAccount = (props) => {
  const { setDeleteAcc } = props;
  const [isOpen] = useState(true);
  const { user } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   await deleteUserFiles("gallery", currentUser);
      //   await deleteUser(currentUser);
      setDeleteAcc(false);
      console.log("Your account has been deleted...");
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
              Are you sure you want to delete your account? This action will
              delete all of your files and records
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" endIcon={<Send />} type="submit">
              Confirm
            </Button>
          </DialogActions>
        </form>
      }
      title="Delete Account"
    />
  );
};

export default DeleteAccount;
