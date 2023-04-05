import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";

import { useCart } from "../../contexts/CartContextProvider";
import cart from "./img/logoCart.png";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const {
    user: { email },
  } = useAuth();

  const { addProductToCart, checkProductInCart } = useCart();
  return (
    <Card
      sx={{
        maxWidth: 1100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ height: "14rem", width: "100%" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              width: "100%",
              fontFamily: "sans-serif",
              marginLeft: "5px",
              fontFamily: "Montserrat",
            }}
          >
            <h3>{item.name}</h3>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "18px",
              marginTop: "30px",
              marginLeft: "30px",
              fontFamily: "Open Sans",
              lineHeight: "27px",
            }}
          >
            <p>{item.description}</p>
          </Typography>
          <Typography
            variant="body5"
            sx={{
              fontSize: "24px",
              color: "#000000",
              color: "#006c73",
            }}
          >
            <p>{item.price} сом</p>
          </Typography>
        </Box>
        <CardMedia
          sx={{
            width: "300px",
            height: "300px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          image={item.picture}
          title="PS"
        />
        <CardActions sx={{ width: "100%", justifyContent: "center" }}>
          <Button
            id="btn_details"
            sx={{
              width: "10%",
              backgroundColor: "#006c73",
              color: "#b7b7a4",
            }}
            onClick={() => navigate(`/details/${item.id}`)}
            size="small, "
          >
            Детали
          </Button>
          <div onClick={() => addProductToCart(item)}>
            <img
              src={cart}
              alt=""
              width={50}
              color={checkProductInCart(item.id) ? "warning" : ""}
            />
          </div>

          {email === ADMIN ? (
            <>
              <Button
                sx={{
                  width: "10%",
                  backgroundColor: "#006c73",
                  color: "#b7b7a4",
                  fontSize: "7px",
                }}
                onClick={() => deleteProduct(item.id)}
                size="small, "
              >
                Удалить
              </Button>
              <Button
                sx={{
                  width: "10%",
                  backgroundColor: "#006c73",
                  color: "#b7b7a4",
                  fontSize: "7px",
                }}
                onClick={() => navigate(`/edit/${item.id}`)}
                size="small"
              >
                Редактировать
              </Button>
            </>
          ) : null}
        </CardActions>
      </CardContent>
    </Card>
  );
}
