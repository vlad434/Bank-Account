import { useDispatch, useSelector } from "react-redux";
import {
  deposit,
  setDepositAmount,
  setCurrency,
} from "../features/accounts/accountSlice";
import LabeledInput from "./LabeledInput";
import SelectInput from "./SelectInput";

function DepositForm() {
  const dispatch = useDispatch();
  const { depositAmount, currency, isLoading } = useSelector(
    (state) => state.account
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
        onChange={(e) => dispatch(setDepositAmount(e.target.value))}
      />
      <SelectInput
        value={currency}
        onChange={(e) => dispatch(setCurrency(e.target.value))}
      />
      <button onClick={handleDeposit} disabled={isLoading}>
        {isLoading ? "Converting..." : `Deposit $${depositAmount}`}
      </button>
    </div>
  );
}

export default DepositForm;
