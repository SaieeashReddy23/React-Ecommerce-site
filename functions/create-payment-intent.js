//domain/.netlify/functions/create-payment-intent

require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    const { shipping, total_products_price } = JSON.parse(event.body);

    const calculateTotal = () => {
      return shipping + total_products_price;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateTotal(),
        currency: "usd",
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ ...paymentIntent }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message,
        }),
      };
    }
  }

  return {
    statusCode: 200,
    body: "Create payment intent",
  };
};
