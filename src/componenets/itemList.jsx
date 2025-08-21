import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useCart } from "../context/cartContext";
import { toast, Bounce } from "react-toastify";

function ItemList({ item }) {
  const cart = useCart();
  console.log(cart);
  return (
    <>
      <Card
        variant="outlined"
        sx={{ maxWidth: 345, backgroundColor: "#595757ff" }}
      >
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ color: "white" }}
            >
              {item.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "lightyellow", fontSize: "1.2rem" }}
            >
              {item.details}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "whitesmoke", marginTop: "1rem" }}
            >
              RS.{item.price_in_inr}/-
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            onClick={() => {
              cart.addToCart({
                name: item.name,
                price: item.price_in_inr,
              });
              toast.success("Item Added To Cart", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              });
            }}
          >
            Add TO CART
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ItemList;
