const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
  depositAmount: "",
  withdrawalAmount: "",
  loanAmount: "",
  loanPurposeInput: "",
  currency: "USD",
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/setDepositAmount":
      return { ...state, depositAmount: action.payload };
    case "account/setWithdrawalAmount":
      return { ...state, withdrawalAmount: action.payload };
    case "account/setLoanAmount":
      return { ...state, loanAmount: action.payload };
    case "account/setLoanPurposeInput":
      return { ...state, loanPurposeInput: action.payload };
    case "account/setCurrency":
      return { ...state, currency: action.payload };
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
        depositAmount: "",
        currency: "USD",
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
        withdrawalAmount: "",
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
        loanAmount: "",
        loanPurposeInput: "",
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case "account/convertingCurrency":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

const setDepositAmount = (amount) => {
  return { type: "account/setDepositAmount", payload: amount };
};

const setWithdrawalAmount = (amount) => {
  return { type: "account/setWithdrawalAmount", payload: amount };
};

const setLoanAmount = (amount) => {
  return { type: "account/setLoanAmount", payload: amount };
};

const setLoanPurposeInput = (purpose) => {
  return { type: "account/setLoanPurposeInput", payload: purpose };
};

const setCurrency = (currency) => {
  return { type: "account/setCurrency", payload: currency };
};

const deposit = (amount, currency) => {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch) {
    dispatch({ type: "account/convertingCurrency" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    dispatch({ type: "account/deposit", payload: converted });
  };
};

const withdraw = (amount) => {
  return { type: "account/withdraw", payload: amount };
};

const requestLoan = (amount, purpose) => {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
};

const payLoan = () => {
  return { type: "account/payLoan" };
};

export {
  setDepositAmount,
  setWithdrawalAmount,
  setLoanAmount,
  setLoanPurposeInput,
  setCurrency,
  deposit,
  withdraw,
  requestLoan,
  payLoan,
};
