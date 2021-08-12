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

function OtpInputForm({ setSuccessData, setStep }) {
  const { values, updateValue, resetForm } = useForm({
    otp: "",
  });

  const [otpError, setOtpError] = useState({
    hasError: false,
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (values.otp === "") {
      return setOtpError({
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
      resetForm({ otp: "" });
      setStep(3);
    }
    if (res.responseStatus === 2) {
      setStep(1);
    }
  }
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Typography variant="subtitle2">
        Enter the OTP We sent to your email
      </Typography>
      <TextField
        label="OTP"
        variant="outlined"
        fullWidth
        margin="normal"
        error={otpError.hasError}
        helperText={otpError.message}
        name="otp"
        value={values.otp}
        onChange={(e) => {
          setOtpError({ hasError: false, message: "" });
          updateValue(e);
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default OtpInputForm;
