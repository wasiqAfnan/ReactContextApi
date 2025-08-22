import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { useCart } from "../context/cartContext";

function Cart() {
  const cart = useCart();
  const total = cart.cartItems.reduce((a,b)=> a + b.price,0)
  return (
    <>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {/* Cart Header */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          🛒 Your Cart
        </Typography>

        {/* Empty cart */}
        {cart.cartItems.length === 0 && (
          <Typography variant="h6" color="text.secondary">
            Cart is Empty
          </Typography>
        )}

        {/* Cart Items */}
        <Grid container spacing={2}>
          {cart.cartItems.map((item, i) => (
            <Grid item xs={12} key={i}>
              <Card sx={{ backgroundColor: "#f5f5f5" }}>
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="h6" color="text.secondary">
                    ₹{item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Total Section */}
        {cart.cartItems.length > 0 && (
          <Card sx={{ mt: 3, p: 2, backgroundColor: "#e0e0e0" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Total Amount: ₹{total}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Container>
    </>
  );
}

export default Cart;
