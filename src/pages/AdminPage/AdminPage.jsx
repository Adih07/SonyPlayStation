import React from "react";
import AddProduct from "../../components/product/AddProduct";

const AdminPage = () => {
  return (
    <div
      style={{
        border: "1px solid red",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <AddProduct />
    </div>
  );
};

export default AdminPage;
