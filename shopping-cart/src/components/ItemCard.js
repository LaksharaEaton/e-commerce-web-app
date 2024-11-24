import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Chip,
} from "@mui/material";
import { useCart } from "../context/CartContext";


const ItemCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.img}
        alt={item.name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {item.name}
        </Typography>
        <Typography color="text.secondary">Price: ${item.price}</Typography>
        <Chip
          label={`${item.discount}% OFF`}
          color="secondary"
          size="small"
          sx={{ marginY: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
