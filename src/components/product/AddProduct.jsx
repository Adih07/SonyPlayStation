import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    type: "",
  });

  const { addProduct } = useProducts();

  const handleInp = (e) => {
    if (e.target.name == "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  console.log(product);
  return (
    <Box
      sx={{
        width: "40vw",
        margin: "5vh auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "rgb(254, 249, 239)",
        gap: "30px",
        padding: "20px",
      }}
    >
      <h1 className="admin_header" align="center">
        <AccountCircleIcon />
      </h1>
      <TextField
        id="outlined-basic"
        label="Имя товара"
        variant="outlined"
        color="grey"
        name="name"
        size="small"
        onChange={handleInp}
      />
      <TextField
        id="outlined-basic"
        label="Описание"
        variant="outlined"
        color="grey"
        name="description"
        size="small"
        onChange={handleInp}
      />
      <TextField
        id="outlined-basic"
        label="Цена"
        variant="outlined"
        color="grey"
        name="price"
        size="small"
        onChange={handleInp}
      />
      <TextField
        id="outlined-basic"
        label="Изображение"
        variant="outlined"
        color="grey"
        name="picture"
        size="small"
        onChange={handleInp}
      />
      <TextField
        id="outlined-basic"
        label="Тип товара"
        variant="outlined"
        color="grey"
        name="type"
        size="small"
        onChange={handleInp}
      />
      <Button
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}
        size="large"
        variant="outlined"
        sx={{
          border: "1px solid black",
          color: "white",
          backgroundColor: "black",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        Добавить продукт
      </Button>
    </Box>
  );
};

export default AddProduct;
