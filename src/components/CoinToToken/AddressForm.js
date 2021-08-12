import { Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";

function mockApi() {
  const number = Math.ceil(Math.random() * 10);

  if (number <= 5) {
    return {
      responseStatus: 1,
      message: "Message to display",
    };
  }
  return {
    responseStatus: 2,
    ethereumAddress: "Display Ethereum Address",
  };
}

export default function AddressForm({
  setMessage,
  setStep,
  values,
  updateValue,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    const res = mockApi();
    if (res.responseStatus === 1) {
      setMessage(res.message);
      setStep(2);
    }
    if (res.responseStatus === 2) {
      setMessage(res.ethereumAddress);
      setStep(3);
    }
  }
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        label="Coin Address"
        variant="outlined"
        fullWidth
        margin="normal"
        mt={4}
        name="coinAddress"
        value={values.coinAddress}
        onChange={updateValue}
      />
      <TextField
        label="Token Address"
        variant="outlined"
        fullWidth
        margin="normal"
        name="tokenAddress"
        value={values.tokenAddress}
        onChange={updateValue}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
