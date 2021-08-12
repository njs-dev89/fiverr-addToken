import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function mockApi() {
  const number = Math.ceil(Math.random() * 10);

  if (number <= 5) {
    return {
      responseStatus: 1,
    };
  }
  return {
    responseStatus: 2,
    ethereumAddress: "Display Ethereum Address",
  };
}

export default function EmailForm({
  setMessage,
  setStep,
  values,
  updateValue,
  resetForm,
}) {
  const [emailError, setEmailError] = useState({
    hasError: false,
    message: "",
  });

  const [tokenError, setTokenError] = useState({
    hasError: false,
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (values.emailAddress === "") {
      return setEmailError({
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
      resetForm({ emailAddress: "", tokenAddress: "" });
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
        label="Email Address"
        variant="outlined"
        fullWidth
        error={emailError.hasError}
        helperText={emailError.message}
        margin="normal"
        name="emailAddress"
        value={values.emailAddress}
        onChange={(e) => {
          setEmailError({ hasError: false, message: "" });
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
