import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import {
  requestLoan,
  setLoanAmount,
  setLoanPurposeInput,
} from "../features/accounts/accountSlice";
import LabeledInput from "./LabeledInput";

const LoanForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loanAmount, loanPurposeInput } = useSelector(
    (state: RootState) => state.account
  );

  const handleRequestLoan = () => {
    if (!loanAmount || !loanPurposeInput) return;
    dispatch(requestLoan(Number(loanAmount), loanPurposeInput));
  };

  return (
    <div>
      <LabeledInput
        label="Loan amount"
        inputType="number"
        inputValue={loanAmount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setLoanAmount(e.target.value))
        }
        placeholder="Loan amount"
      />
      <LabeledInput
        label="Loan purpose"
        inputValue={loanPurposeInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setLoanPurposeInput(e.target.value))
        }
        placeholder="Loan purpose"
      />
      <button onClick={handleRequestLoan}>Request loan</button>
    </div>
  );
};

export default LoanForm;
