import { connect } from "react-redux";
import type { RootState } from "../../store";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state: RootState) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);
