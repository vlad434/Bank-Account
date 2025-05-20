import { useDispatch, useSelector } from "react-redux";
import {
  requestLoan,
  setLoanAmount,
  setLoanPurposeInput,
} from "../features/accounts/accountSlice";
import LabeledInput from "./LabeledInput";

function LoanForm() {
  const dispatch = useDispatch();
  const { loanAmount, loanPurposeInput } = useSelector(
    (state) => state.account
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
        onChange={(e) => dispatch(setLoanAmount(e.target.value))}
        placeholder="Loan amount"
      />
      <LabeledInput
        label="Loan purpose"
        inputValue={loanPurposeInput}
        onChange={(e) => dispatch(setLoanPurposeInput(e.target.value))}
        placeholder="Loan purpose"
      />
      <button onClick={handleRequestLoan}>Request loan</button>
    </div>
  );
}

export default LoanForm;
