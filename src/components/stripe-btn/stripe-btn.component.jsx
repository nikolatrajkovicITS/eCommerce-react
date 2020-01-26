import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_q9rne9Xje0fChARhmoE3nPtD";

  return (
    <StripeCheckout
      label="Pay Now"
      name="Our Kitty Shop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
