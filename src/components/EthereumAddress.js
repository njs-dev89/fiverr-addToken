import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  msgContainer: {
    marginTop: "2.5rem",
    marginBottom: "1.5rem",
  },
  msgTitle: {
    color: theme.palette.primary.main,
    marginRight: "4px",
  },
}));

function EthereumAddress({ successData, setStep }) {
  const classes = useStyles();
  function handleClick() {
    setStep(1);
  }
  return (
    <div>
      <div className={classes.msgContainer}>
        <Typography variant="subtitle2">
          <span className={classes.msgTitle}>Address:</span>
          {successData.address}
        </Typography>
        <Typography variant="subtitle2">
          <span className={classes.msgTitle}>Txid:</span>
          {successData.txid}
        </Typography>
        <Typography variant="subtitle2">
          <span className={classes.msgTitle}>Amount:</span>
          {successData.amount}
        </Typography>
      </div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Add more Token
      </Button>
    </div>
  );
}

export default EthereumAddress;
