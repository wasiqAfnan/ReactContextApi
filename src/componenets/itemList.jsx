import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

function ItemList({ item, index }) {
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
          <Button variant="contained">Add TO CART</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ItemList;
