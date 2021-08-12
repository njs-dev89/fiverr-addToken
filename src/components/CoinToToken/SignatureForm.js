import { Button, TextField } from "@material-ui/core";
import React from "react";

function SignatureForm({ message }) {
  return (
    <form noValidate autoComplete="off">
      <div>{message}</div>
      <TextField
        label="Signature"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default SignatureForm;
