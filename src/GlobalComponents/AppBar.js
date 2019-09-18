import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DemandeDevis from ".././Components/DemandeDevis";
import logo from ".././Image/logo.png";

const useStyles = makeStyles({
  bar: {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50vw",
    padding: "0 25%",
    minHeight: 90,
    background: "white",
    boxShadow: "0 0 5px #969696",
    zIndex: "1"
  },

  navLink: {
    width: "20%",
    "&:hover": {
      cursor: "pointer"
    }
  },

  logo: {
    background: `center / contain no-repeat url(${logo})`,
    minWidth: 80,
    height: 80
  }
});

export default function AppBar(props) {
  const classes = useStyles();

  const handleClick = ref =>
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  return (
    <nav className={classes.bar}>
      <p className={classes.navLink} onClick={() => handleClick(props.ref0)}>
        Qui suis-je
      </p>
      <p className={classes.navLink} onClick={() => handleClick(props.ref1)}>
        Mes services
      </p>
      <div className={classes.logo} />
      <p className={classes.navLink} onClick={() => handleClick(props.ref2)}>
        Mon portfolio
      </p>
      <DemandeDevis />
    </nav>
  );
}
