import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  msgContainer: {
    marginTop: "2.5rem",
    marginBottom: "1.5rem",
  },
});

function EthereumAddress({ address, setStep }) {
  const classes = useStyles();
  function handleClick() {
    setStep(1);
  }
  return (
    <div>
      <div className={classes.msgContainer}>{address}</div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Edit
      </Button>
    </div>
  );
}

export default EthereumAddress;
