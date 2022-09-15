import {
  Avatar,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import SubmitButton from "./inputs/SubmitButton";
import CountrySelect from "./inputs/NationalityField";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Profile = () => {
  console.log("..inside profile component");
  const { user } = useSelector((state) => state.auth);
  console.log("######### user", user);
  const [name, setName] = useState(user?.name);
  const [birthdate, setBirthDate] = useState(user?.birthdate);
  const [idNumber, setIdNumber] = useState(user?.id_number);
  const [age, setAge] = useState(user?.age);
  const [nationality, setNationality] = useState(user?.nationality);
  const [maritalStatus, setMaritalStatus] = useState(user?.marital_status);

  const [file, setFile] = useState(null);
  const [, setIdFile] = useState(null);
  const [photo_url, setPhotoURL] = useState(
    user?.photo_url ||
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
  );

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPhotoURL(URL.createObjectURL(file));
    }
  };

  const handleIdUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIdFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("....user ", user);
    const profileInfo = {
      email: user?.email,
      name,
      birthdate,
      id_number: idNumber,
      age,
      nationality,
      marital_status: maritalStatus,
      photo_url,
    };

    await axios
      .post(`/api/users/profile/${user.id}`, profileInfo)
      .then((res) => console.log("Success" + JSON.stringify(res.data)))
      .catch((err) => console.log(err.message));

    console.log("...Profile info", profileInfo);

    try {
      if (file) {
        const imageName = uuidv4() + "." + file?.name?.split(".")?.pop();
        const url = `profile/${user?.id}/${imageName}`;

        console.log("uploading file...");

        if (user?.photo_url) {
          try {
            console.log("deleting file...");
          } catch (error) {
            console.log(error);
          }
        }
      }

      console.log("Your profile has been updated");
    } catch (error) {
      console.log(error);
    }
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
            src={photo_url}
            sx={{ width: 75, height: 75, cursor: "pointer" }}
          />
          {user?.account_status === "UNVERIFIED" ? (
            "Unverified Account. Please, provide ID/NID number with the document's picture to verify"
          ) : user?.account_status === "VERIFIED" ? (
            <CheckCircleIcon />
          ) : (
            "Pending Verification"
          )}
          <br />
        </label>
        <label>Full Name</label>
        <TextField
          autoFocus
          margin="normal"
          type="text"
          inputProps={{ minLength: 2 }}
          fullWidth
          variant="filled"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Birth date</label>
        <TextField
          margin="normal"
          type="date"
          inputProps={{ minLength: 2 }}
          fullWidth
          variant="filled"
          value={birthdate || ""}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <label>NID or Passport Number</label>
        <TextField
          margin="normal"
          type="text"
          inputProps={{ minLength: 2 }}
          fullWidth
          variant="filled"
          value={idNumber || ""}
          onChange={(e) => setIdNumber(e.target.value)}
        />
        <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            onChange={handleIdUpload}
          />

          <Button color="secondary" variant="contained" component="span">
            NID or Passport Photo
          </Button>
        </label>
        <br />
        <br />
        <label>Age</label>
        <TextField
          margin="normal"
          type="number"
          inputProps={{ minLength: 2 }}
          fullWidth
          variant="filled"
          value={age || ""}
          onChange={(e) => setAge(e.target.value)}
        />
        <CountrySelect
          fullWidth
          variant="filled"
          value={nationality || ""}
          onChange={(val) => setNationality(val)}
        />
        <label>Marital Status</label>
        <TextField
          placeholder="SINGLE, MARRIED, DIVORCED or WIDOWED"
          margin="normal"
          type="text"
          inputProps={{ minLength: 2 }}
          fullWidth
          variant="filled"
          value={maritalStatus || ""}
          onChange={(e) => setMaritalStatus(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <SubmitButton />
      </DialogActions>
    </form>
  );
};

export default Profile;
