import { useDispatch, useSelector } from "react-redux";
import { payLoan } from "../features/accounts/accountSlice";

function PayLoanSection() {
  const dispatch = useDispatch();
  const { loan: currentLoan, loanPurpose: currentLoanPurpose } = useSelector(
    (state) => state.account
  );

  if (currentLoan <= 0) return null;

  return (
    <div>
      <span>
        Pay back ${currentLoan} ({currentLoanPurpose})
      </span>
      <button onClick={() => dispatch(payLoan())}>Pay loan</button>
    </div>
  );
}

export default PayLoanSection;
