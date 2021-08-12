import { Button, TextField } from "@material-ui/core";
import React from "react";

function OtpInputForm() {
  return (
    <form>
      <TextField label="OTP" variant="outlined" fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default OtpInputForm;
