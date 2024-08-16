import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutFrom = () => {
  const stripe = useStripe();
  const elements = useElements();
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
    } else {
      console.log("[paymentMethod]", paymentMethod);
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
