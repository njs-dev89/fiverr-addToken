import { useState } from "react";

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    const value = e.target.value;
    if (e.target.type === "number") {
      value = parseInt(value);
    }
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  function resetForm(resetValues) {
    setValues(resetValues);
  }

  return { values, updateValue, resetForm };
}
