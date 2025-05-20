import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const Customer = () => {
  const customer = useSelector((store: RootState) => store.customer.fullName); //creaza un subscription la store si cand store se schimba, componenta se re-rendeaza

  console.log(customer);
  return <h2>👋 Welcome, {customer}</h2>;
};

export default Customer;
