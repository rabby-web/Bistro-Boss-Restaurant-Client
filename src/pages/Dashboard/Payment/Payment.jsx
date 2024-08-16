import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle heading="Payment" subHeading="Pay now"></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutFrom></CheckoutFrom>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
