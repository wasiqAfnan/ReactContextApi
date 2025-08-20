import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CartApp(Context API)
          </Typography>

          {/* Bold Button */}
          <Button onClick={()=>navigate("/")} color="inherit" size="large" sx={{ fontWeight: "bold" }}>
            Home
          </Button>

          {/* Bold-Looking Icon */}
          <IconButton
            onClick={()=>navigate("/cart")}
            color="inherit"
            sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
          >
            <ShoppingCartIcon sx={{ fontSize: "1.8rem" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
