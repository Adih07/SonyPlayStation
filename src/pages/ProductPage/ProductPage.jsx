import React from "react";
import { Grid } from "@mui/material";
import SideBar from "../../components/product/SideBar";
import ProductList from "../../components/product/ProductList";

const ProductsPage = () => {
  return (
    <Grid>
      <Grid>
        <SideBar />
      </Grid>
      <hr color="red" />
      <br />
      <Grid>
        <ProductList />
      </Grid>
    </Grid>
  );
};

export default ProductsPage;
