import DepositForm from "../../components/DepositForm";
import WithdrawForm from "../../components/WithdrawForm";
import LoanForm from "../../components/LoanForm";
import PayLoanSection from "../../components/PayLoanSection";

const AccountOperations = () => {
  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <DepositForm />
        <WithdrawForm />
        <LoanForm />
        <PayLoanSection />
      </div>
    </div>
  );
};

export default AccountOperations;
