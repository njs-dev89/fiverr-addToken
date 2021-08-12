import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  msgContainer: {
    marginTop: "2.5rem",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
});

function EthereumAddress({ successData, setStep }) {
  const classes = useStyles();
  function handleClick() {
    setStep(1);
  }
  return (
    <div>
      <div className={classes.msgContainer}>
        <Typography variant="subtitle2">{successData.address}</Typography>
        <Typography variant="subtitle2">{successData.txid}</Typography>
        <Typography variant="subtitle2">{successData.amount}</Typography>
      </div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Add more Token
      </Button>
    </div>
  );
}

export default EthereumAddress;
