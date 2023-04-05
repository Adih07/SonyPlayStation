import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();
  const navigate = useNavigate();
  const [product, setProduct] = useState(productDetails);

  const { id } = useParams();
  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  console.log(product);

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
      <h1>Отредактировать Товар</h1>
      <TextField
        className="admin_inp"
        id="outlined-basic"
        label="Имя товара"
        variant="outlined"
        name="name"
        size="small"
        onChange={handleInp}
        value={product.name || ""}
      />
      <TextField
        className="admin_inp"
        id="outlined-basic"
        label="Описание"
        variant="outlined"
        name="description"
        size="small"
        onChange={handleInp}
        value={product.description || ""}
      />
      <TextField
        className="admin_inp"
        id="outlined-basic"
        label="Цена товара"
        variant="outlined"
        name="price"
        size="small"
        onChange={handleInp}
        value={product.price || ""}
      />
      <TextField
        className="admin_inp"
        id="outlined-basic"
        label="Изображение товара"
        variant="outlined"
        name="picture"
        size="small"
        onChange={handleInp}
        value={product.picture || ""}
      />
      <TextField
        className="admin_inp"
        id="outlined-basic"
        label="Тип товара"
        variant="outlined"
        name="type"
        size="small"
        onChange={handleInp}
        value={product.type || ""}
      />
      <Button
        className="admin_btn"
        onClick={() => {
          saveEditedProduct(product);
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
        Сохранить изменения
      </Button>
    </Box>
  );
};

export default EditProduct;
