import { useDispatch, useSelector } from "react-redux";
import {
  withdraw,
  setWithdrawalAmount,
} from "../features/accounts/accountSlice";
import LabeledInput from "./LabeledInput";

export default function WithdrawForm() {
  const dispatch = useDispatch();
  const { withdrawalAmount } = useSelector((state) => state.account);

  const handleWithdrawal = () => {
    if (!withdrawalAmount) return;
    dispatch(withdraw(Number(withdrawalAmount)));
  };

  return (
    <div>
      <LabeledInput
        label="Withdraw"
        inputType="number"
        inputValue={withdrawalAmount}
        onChange={(e) => dispatch(setWithdrawalAmount(e.target.value))}
      />
      <button onClick={handleWithdrawal}>Withdraw {withdrawalAmount}</button>
    </div>
  );
}
