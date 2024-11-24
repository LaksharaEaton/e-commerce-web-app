// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider, CssBaseline, Container, Grid, Typography } from "@mui/material";
import theme from "./theme/theme";
import ItemCard from "./components/ItemCard";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";



const App = () => {
  const items = [
    { name: "Chocolate Cake", price: 100, discount: 10, img: "/images/cocolatecake.jpg" },
    { name: "Strawberry Cake", price: 50, discount: 5, img: "/images/strawberrycake.jpg"},
    { name: "Coffee Cake", price: 200, discount: 20, img: "/images/coffeecake.jpg" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Shopping Cart App
          </Typography>
          <Grid container spacing={2}>
            {items.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <ItemCard item={item} />
              </Grid>
            ))}
          </Grid>
          <Cart/>
          <Checkout/>
        </Container>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;