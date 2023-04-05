import React from "react";
import Catalog from "../../components/Catalog/Catalog";
import Header from "../../components/Header/Header";
import BodyHeader from "../../components/BodyHeader/BodyHeader";

const HomePage = () => {
  return (
    <div>
      <BodyHeader />
      <Header />
      <Catalog />
    </div>
  );
};

export default HomePage;
