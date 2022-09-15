import React from "react";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import ChangeEmail from "./ChangeEmail";
import DeleteAccount from "./DeleteAccount";
// import { useSelector } from "react-redux";
import ChangePassword from "./ChangePassword";
import { useState } from "react";

const AccountSettings = () => {
  const [emailOpen, setEmailOpen] = useState(false);
  const [passOpen, setPassOpen] = useState(false);
  const [deleteAcc, setDeleteAcc] = useState(false);

  // const { user } = useSelector((state) => state.auth);

  const handleAction = async (action) => {
    try {
      switch (action) {
        case "changeEmail":
          setEmailOpen(true);
          break;
        case "changePassword":
          setPassOpen(true);
          break;
        case "deleteAccount":
          setDeleteAcc(true);
          break;
        default:
          throw new Error("No matching action");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <DialogContent dividers>
        <DialogContentText>
          For security reason, you need to provide your credentials to do any of
          these actions:
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ flexDirection: "column", gap: 2, my: 2 }}>
        <Button onClick={() => handleAction("changePassword")}>
          Change Password
          {passOpen && <ChangePassword setPassOpen={setPassOpen} />}
        </Button>
        <Button onClick={() => handleAction("changeEmail")}>
          Change Email
          {emailOpen && <ChangeEmail setEmailOpen={setEmailOpen} />}
        </Button>
        <Button onClick={() => handleAction("deleteAccount")}>
          Delete Account
          {deleteAcc && <DeleteAccount setDeleteAcc={setDeleteAcc} />}
        </Button>
      </DialogActions>
    </>
  );
};

export default AccountSettings;
