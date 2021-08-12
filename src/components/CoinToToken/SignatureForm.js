import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useForm from "../../custom-hooks/useForm";

function mockApi() {
  const number = Math.ceil(Math.random() * 10);

  if (number <= 5) {
    return {
      responseStatus: 1,
      address: "Message to display",
      txid: "123",
      amount: "some amount",
    };
  }
  return {
    responseStatus: 2,
    message: "Display Error message",
  };
}

function SignatureForm({ message, setSuccessData, setStep }) {
  const { values, updateValue, resetForm } = useForm({
    signature: "",
  });

  const [signError, setSignError] = useState({
    hasError: false,
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (values.signature === "") {
      return setSignError({
        hasError: true,
        message: "Please input your signature",
      });
    }

    const res = mockApi();
    if (res.responseStatus === 1) {
      setSuccessData({
        address: res.address,
        txid: res.txid,
        amount: res.amount,
      });
      resetForm({ signature: "" });
      setStep(3);
    }
    if (res.responseStatus === 2) {
      setStep(1);
    }
  }
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Typography variant="subtitle2">{message}</Typography>
      <TextField
        label="Signature"
        variant="outlined"
        fullWidth
        error={signError.hasError}
        helperText={signError.message}
        margin="normal"
        name="signature"
        value={values.signature}
        onChange={(e) => {
          setSignError({ hasError: false, message: "" });
          updateValue(e);
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default SignatureForm;
