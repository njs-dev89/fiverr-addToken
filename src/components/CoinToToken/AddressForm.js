import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

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
    message: "Display Error message",
  };
}

export default function AddressForm({
  setMessage,
  setStep,
  values,
  updateValue,
}) {
  const [coinError, setCoinError] = useState({
    hasError: false,
    message: "",
  });

  const [tokenError, setTokenError] = useState({
    hasError: false,
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (values.coinAddress === "") {
      return setCoinError({
        hasError: true,
        message: "*Email Address is required",
      });
    }

    if (values.tokenAddress === "") {
      return setTokenError({
        hasError: true,
        message: "*Token Address is required",
      });
    }

    const res = mockApi();
    if (res.responseStatus === 1) {
      setMessage(res.message);
      setStep(2);
    }
    if (res.responseStatus === 2) {
      setCoinError({ hasError: true, message: res.message });
    }
  }
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        label="Coin Address"
        variant="outlined"
        fullWidth
        error={coinError.hasError}
        helperText={coinError.message}
        margin="normal"
        name="coinAddress"
        value={values.coinAddress}
        onChange={(e) => {
          setCoinError({ hasError: false, message: "" });
          updateValue(e);
        }}
      />
      <TextField
        label="Token Address"
        variant="outlined"
        fullWidth
        error={tokenError.hasError}
        helperText={tokenError.message}
        margin="normal"
        name="tokenAddress"
        value={values.tokenAddress}
        onChange={(e) => {
          setTokenError({ hasError: false, message: "" });
          updateValue(e);
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
