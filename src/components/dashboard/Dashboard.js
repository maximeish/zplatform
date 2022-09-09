import { logoutUser } from "../../actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import { Lock } from "@mui/icons-material";
import Profile from "./user/Profile";
import AccountSettings from "./user/settings/AccountSettings";
import Modal from "./Modal";
import { useState } from "react";
import { setModal } from "../../actions/modalActions";

const Dashboard = () => {
  const state = useSelector((state) => state.auth);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  console.log("...current modal", modal);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogoutClick = (e) => {
    e.preventDefault();
    logoutUser();
  };

  const { user } = state;

  return (
    <>
      {/* <Modal
        title="Update Profile"
        content={<Profile />}
        open={
          profileModalOpen &&
          console.log("...profile model is ", profileModalOpen)
        }
      /> */}
      <Modal
        title="Account Settings"
        content={<AccountSettings />}
        open={settingsModalOpen}
      />
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Tooltip title="Account settings">
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  src={
                    user?.photoURL ||
                    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  }
                >
                  {user?.name?.charAt(0)?.toUpperCase() ||
                    user?.email?.charAt(0)?.toUpperCase()}
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              onClick={() => {
                dispatch(
                  setModal({
                    open: true,
                    title: "Update Profile",
                    content: <Profile />,
                  })
                );
              }}
            >
              <Avatar
                src={
                  user?.photoURL ||
                  "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                }
              />
              Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => setSettingsModalOpen(true)}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={onLogoutClick}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into ZPlatform
              </p>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
