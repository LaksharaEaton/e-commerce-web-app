// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { CartProvider } from "./context/CartContext";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Card, CardContent, Button, TextField } from "@mui/material";
import theme from "./theme/theme";
import ItemCard from "./components/ItemCard";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { useState } from "react";
import { useMemo } from "react";

const App = () => {
  const items = [
    {
      name: "1 Chocolate Cake",
      price: 100,
      discount: 10,
      img: "/images/cocolatecake.jpg",
    },
    {
      name: "2 Strawberry Cake",
      price: 50,
      discount: 5,
      img: "/images/strawberrycake.jpg",
    },
    {
      name: "3 Coffee Cake",
      price: 200,
      discount: 20,
      img: "/images/coffeecake.jpg",
    },
    {
      name: "4 Apple",
      price: 100,
      discount: 10,
      img: "/images/cocolatecake.jpg",
    },
    {
      name: "5 Strawberry",
      price: 50,
      discount: 5,
      img: "/images/strawberrycake.jpg",
    },
    { name: "6 Lime", price: 200, discount: 20, img: "/images/coffeecake.jpg" },
    {
      name: "7 Cappucinno",
      price: 100,
      discount: 10,
      img: "/images/cocolatecake.jpg",
    },
    {
      name: "8 Black Coffee",
      price: 50,
      discount: 5,
      img: "/images/strawberrycake.jpg",
    },
    {
      name: "9 Latte",
      price: 200,
      discount: 20,
      img: "/images/coffeecake.jpg",
    },
    {
      name: "10 Rice",
      price: 100,
      discount: 10,
      img: "/images/cocolatecake.jpg",
    },
    {
      name: "11 Dhal",
      price: 50,
      discount: 5,
      img: "/images/strawberrycake.jpg",
    },
    {
      name: "12 Sugar",
      price: 200,
      discount: 20,
      img: "/images/coffeecake.jpg",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("price");

  // Filtering and sorting items with useMemo
  const filteredAndSortedItems = useMemo(() => {
    let filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort based on selected criteria
    filteredItems = filteredItems.sort((a, b) => {
      if (sortBy === "price") {
        return a.price - b.price;
      } else if (sortBy === "discount") {
        return a.discount - b.discount;
      } else {
        return 0;
      }
    });

    return filteredItems;
  }, [searchQuery, sortBy, items]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Shopping Cart App
          </Typography>

          <TextField
            label="Search Items"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ marginBottom: 20 }}
          />

          <Button
            onClick={() => setSortBy(sortBy === "price" ? "discount" : "price")}
          >
            Sort by {sortBy === "price" ? "Discount" : "Price"}
          </Button>

          <Grid container spacing={2}>
            {filteredAndSortedItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <img src={item.img} alt={item.name} width="100%" />
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body1">
                      Price: ${item.price}
                    </Typography>
                    <Typography variant="body2">
                      Discount: {item.discount}%
                    </Typography>
                    <Button variant="contained">Add to Cart</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Cart />
          <Checkout />
        </Container>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
