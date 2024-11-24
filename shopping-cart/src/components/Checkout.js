import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cart } = useCart();

  const calculateTotal = () =>
    cart
      .reduce(
        (total, item) => total + item.price * (1 - item.discount / 100),
        0
      )
      .toFixed(2);

  return (
    <Card sx={{ marginTop: 4, padding: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Checkout
        </Typography>
        <Typography variant="body1">Total Items: {cart.length}</Typography>
        <Typography variant="h6" color="primary">
          Total Price: ${calculateTotal()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CheckoutPage;
