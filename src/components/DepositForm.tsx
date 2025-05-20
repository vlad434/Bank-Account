import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import {
  deposit,
  setDepositAmount,
  setCurrency,
} from "../features/accounts/accountSlice";
import LabeledInput from "./LabeledInput";
import SelectInput from "./SelectInput";

const DepositForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { depositAmount, currency, isLoading } = useSelector(
    (state: RootState) => state.account
  );

  const handleDeposit = () => {
    if (!depositAmount) return;
    dispatch(deposit(Number(depositAmount), currency));
  };

  return (
    <div>
      <LabeledInput
        label="Deposit"
        inputType="number"
        inputValue={depositAmount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setDepositAmount(e.target.value))
        }
      />
      <SelectInput
        value={currency}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setCurrency(e.target.value))
        }
      />
      <button onClick={handleDeposit} disabled={isLoading}>
        {isLoading ? "Converting..." : `Deposit $${depositAmount}`}
      </button>
    </div>
  );
};

export default DepositForm;
