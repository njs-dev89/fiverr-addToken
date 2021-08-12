import React, { useState } from "react";
import EthereumAddress from "../EthereumAddress";
import SignatureForm from "./SignatureForm";
import AddressForm from "./AddressForm";
import useForm from "../../custom-hooks/useForm";

function CoinToTokenForm() {
  const { values, updateValue, resetForm } = useForm({
    coinAddress: "",
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
        <AddressForm
          setMessage={setMessage}
          setStep={setStep}
          values={values}
          updateValue={updateValue}
        />
      );
    case 2:
      return (
        <SignatureForm
          message={message}
          setSuccessData={setSuccessData}
          setStep={setStep}
        />
      );
    case 3:
      return <EthereumAddress successData={successData} setStep={setStep} />;
  }
}

export default CoinToTokenForm;
