import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "fixed",
    top: "50%",
    transform: "translateY(50%)",
    width: "500px",
    height: "800px",
    backgroundColor: "#2E3131",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  box: {
    marginTop: "2rem",
  },
  holiday: {
    backgroundImage: "url('https://i.ibb.co/Jn9VMK6/pan-am-thanksgiving.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  },
  link: {
    textDecoration: "none",
    paddingTop: "10px",
    margin: "0 auto",
    marginBottom: "10px",
    fontSize: "2rem",
    color: "#fff",
    "&:hover": {
      borderBottom: "2px solid #fff",
    },
  },
  button: {
    padding: "2rem",
    fontSize: "1.2rem",
    backgroundColor: "#d35400",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "20px",
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <a
        href="https://i.ibb.co/Jn9VMK6/pan-am-thanksgiving.jpg"
        className={classes.link}
      >
        See Larger Menu
      </a>
      <div className={classes.holiday}></div>
    </div>
  );

  return (
    <div className={classes.box}>
      <button type="button" onClick={handleOpen} className={classes.button}>
        See our Thanksgiving Menu
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
