import React, { useState } from "react";
import EthereumAddress from "../EthereumAddress";
import SignatureForm from "./SignatureForm";
import AddressForm from "./AddressForm";
import useForm from "../../custom-hooks/useForm";

function CoinToTokenForm() {
  const { values, updateValue } = useForm({
    coinAddress: "",
    tokenAddress: "",
  });
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
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
      return <SignatureForm message={message} />;
    case 3:
      return <EthereumAddress address={message} setStep={setStep} />;
  }
}

export default CoinToTokenForm;
