import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { payLoan } from "../features/accounts/accountSlice";

const PayLoanSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loan: currentLoan, loanPurpose: currentLoanPurpose } = useSelector(
    (state: RootState) => state.account
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
};

export default PayLoanSection;
