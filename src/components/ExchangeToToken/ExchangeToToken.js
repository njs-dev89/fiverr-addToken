import React, { useState } from "react";
import useForm from "../../custom-hooks/useForm";
import EthereumAddress from "../EthereumAddress";
import EmailForm from "./EmailForm";
import OtpInputForm from "./OtpInputForm";

export default function ExchangeToToken() {
  const { values, updateValue, resetForm } = useForm({
    emailAddress: "",
    tokenAddress: "",
  });
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [successData, setSuccessData] = useState({
    address: "",
    txid: "",
    amount: "",
  });

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
      return <OtpInputForm setSuccessData={setSuccessData} setStep={setStep} />;
    case 3:
      return <EthereumAddress successData={successData} setStep={setStep} />;
  }
}
