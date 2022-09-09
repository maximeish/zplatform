import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../actions/modalActions";

const Modal = (props) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(props.open);
  const handleClose = () => {
    dispatch(
      setModal({
        open: false,
        title: "",
        content: <></>,
      })
    );

    setModalOpen(false);
  };

  useEffect(() => {
    setModalOpen(props.open);
  }, [props.open]);

  return (
    <Dialog open={modalOpen} onClose={handleClose}>
      <DialogTitle>
        {props.title}
        <IconButton
          aria-label="Close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      {props.content}
    </Dialog>
  );
};

export default Modal;
