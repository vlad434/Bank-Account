import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import {
  withdraw,
  setWithdrawalAmount,
} from "../features/accounts/accountSlice";
import LabeledInput from "./LabeledInput";

const WithdrawForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { withdrawalAmount } = useSelector((state: RootState) => state.account);

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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setWithdrawalAmount(e.target.value))
        }
      />
      <button onClick={handleWithdrawal}>Withdraw {withdrawalAmount}</button>
    </div>
  );
};

export default WithdrawForm;
