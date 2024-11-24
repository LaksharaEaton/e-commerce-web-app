import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <Alert severity="info" sx={{ marginTop: 2 }}>
        Your cart is empty. Add some items!
      </Alert>
    );
  }

  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Shopping Cart</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {cart.map((item, index) => (
              <ListItem key={index} divider>
                <ListItemText
                  primary={item.name}
                  secondary={`Price: $${item.price}, Discount: ${item.discount}%`}
                />
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </Button>
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="error"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Cart;
