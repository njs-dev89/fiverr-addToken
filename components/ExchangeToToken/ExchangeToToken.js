import React, { useState } from "react";
import useForm from "../../custom-hooks/useForm";
import EthereumAddress from "../EthereumAddress";
import EmailForm from "./EmailForm";
import OtpInputForm from "./OtpInputForm";

export default function ExchangeToToken() {
  const { values, updateValue } = useForm({
    emailAddress: "",
    tokenAddress: "",
  });
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  switch (step) {
    case 1:
      return (
        <EmailForm
          setMessage={setMessage}
          setStep={setStep}
          values={values}
          updateValue={updateValue}
        />
      );
    case 2:
      return <OtpInputForm message={message} />;
    case 3:
      return <EthereumAddress address={message} setStep={setStep} />;
  }
}
