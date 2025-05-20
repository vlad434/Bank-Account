import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";
import LabeledInput from "../../components/LabeledInput";
import type { AppDispatch } from "../../store";

const Customer = () => {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  };

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <LabeledInput
          label={"Customer full name"}
          inputValue={fullName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFullName(e.target.value)
          }
          placeholder={"Enter customer name"}
        />

        <LabeledInput
          label={"National ID"}
          inputType={"number"}
          inputValue={nationalId}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNationalId(e.target.value)
          }
          placeholder={"Enter customer national ID"}
        />

        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
};

export default Customer;
