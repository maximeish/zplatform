import {
  Avatar,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import SubmitButton from "./inputs/SubmitButton";
import { v4 as uuidv4 } from "uuid";

const Profile = () => {
  console.log("..inside profile component");
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState(user?.name);
  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(
    user?.photoURL ||
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
  );

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPhotoURL(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let userObj = { displayName: name };
    let imagesObj = { uName: name };
    try {
      if (file) {
        const imageName = uuidv4() + "." + file?.name?.split(".")?.pop();
        const url = `profile/${user?.uid}/${imageName}`;
        // = await uploadFile(
        //   file,

        // );
        console.log("uploading file...");

        if (user?.photoURL) {
          const prevImage = user?.photoURL
            ?.split(`${user?.uid}%2F`)[1]
            .split("?")[0];
          if (prevImage) {
            try {
              // await deleteFile(`profile/${user?.uid}/${prevImage}`);
              console.log("deleting file...");
            } catch (error) {
              console.log(error);
            }
          }
        }

        userObj = { ...userObj, photoURL: url };
        imagesObj = { ...imagesObj, uPhoto: url };
      }

      // await updateProfile(user, userObj);
      // await updateUserRecords("gallery", user?.uid, imagesObj);

      console.log("Your profile has been updated");

      // setAlert({
      //   isAlert: true,
      //   severity: "success",
      //   message: "Your profile has been updated",
      //   timeout: 3000,
      //   location: "modal",
      // });
    } catch (error) {
      // setAlert({
      //   isAlert: true,
      //   severity: "error",
      //   message: error.message,
      //   timeout: 5000,
      //   location: "modal",
      // });
      console.log(error);
    }

    // setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogContent>
        <DialogContentText>
          You can update your profile by updating these fields:
        </DialogContentText>
        <label htmlFor="profilePhoto">
          <input
            accept="image/*"
            id="profilePhoto"
            type="file"
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <Avatar
            src={photoURL}
            sx={{ width: 75, height: 75, cursor: "pointer" }}
          />
        </label>
        <label>Name</label>
        <TextField
          autoFocus
          margin="normal"
          type="text"
          inputProps={{ minLength: 2 }}
          fullWidth
          variant="filled"
          value={name || ""}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label>Name</label>
        <TextField
          margin="normal"
          type="text"
          inputProps={{ minLength: 2 }}
          fullWidth
          variant="filled"
          value={name || ""}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label>Name</label>
        <TextField
          margin="normal"
          type="text"
          inputProps={{ minLength: 2 }}
          fullWidth
          variant="filled"
          value={name || ""}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label>Name</label>
        <TextField
          margin="normal"
          type="text"
          inputProps={{ minLength: 2 }}
          fullWidth
          variant="filled"
          value={name || ""}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label>Name</label>
        <TextField
          margin="normal"
          type="text"
          inputProps={{ minLength: 2 }}
          fullWidth
          variant="filled"
          value={name || ""}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label>Name</label>
        <TextField
          margin="normal"
          type="text"
          inputProps={{ minLength: 2 }}
          fullWidth
          variant="filled"
          value={name || ""}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <SubmitButton />
      </DialogActions>
    </form>
  );
};

export default Profile;
