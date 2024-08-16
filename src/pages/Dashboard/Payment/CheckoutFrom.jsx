import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutFrom = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[paymentMethod]", paymentMethod);
      setError("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="border rounded p-4">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      >
        {" "}
      </CardElement>
      <div>
        <h4 className="text-red-600 text-lg p-4">{error}</h4>
      </div>
      <div className="">
        <button
          className="text-xl bg-orange-500 text-white px-5 py-2 rounded-md flex mx-auto m-5"
          type="submit"
          //   disabled={!stripe}
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default CheckoutFrom;
