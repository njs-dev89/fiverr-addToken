import { Button } from "@material-ui/core";
import React from "react";

function EthereumAddress({ address, setStep }) {
  function handleClick() {
    setStep(1);
  }
  return (
    <div>
      <div>{address}</div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Edit
      </Button>
    </div>
  );
}

export default EthereumAddress;
