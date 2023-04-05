import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

import { Box } from "@mui/system";

const DetailsPage = () => {
  const {
    getProductDetails,
    productDetails: product,
    getRandomProducts,
    randomProducts,
  } = useProducts();

  console.log(randomProducts);
  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);

    getRandomProducts();
  }, []);

  return (
    <Box>
      <Box style={{ marginLeft: " 12%", marginTop: "6%" }}>
        <span style={{ marginRight: "14px", cursor: "pointer" }}>
          Вы находитесь:
        </span>

        <span style={{ marginRight: "14px", color: "#006C73" }}>Детали</span>
        <Box style={{ marginTop: "3%" }}>
          <h3
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontSize: "20px",
            }}
          >
            {product.name}
          </h3>
        </Box>
      </Box>
      <img
        style={{
          marginLeft: "4.17%",
          width: "100px",
          marginLeft: "13%",
          maxHeight: 1500,
          objectFit: "cover",
        }}
        src={product.picture}
        alt=""
      />
      <Box
        style={{
          marginTop: " 3%",
          width: "55%",
          marginLeft: "13%",
          fontFamily: "Open Sans",
          fontStyle: " normal",
          fontWeight: " 300",
          fontSize: "15px",
          lineHeight: "150%",
          color: "#202020",
        }}
      >
        <h3>{product.description}</h3>
      </Box>
      <h3
        style={{
          marginTop: " 3%",
          width: "55%",
          marginLeft: "13%",
          fontFamily: "Open Sans",
          fontStyle: " normal",
          fontWeight: " 300",
          fontSize: "15px",
          lineHeight: "150%",
          color: "#202020",
        }}
      >
        {product.price} сом
      </h3>
      <h4
        style={{
          width: "55%",
          marginLeft: "13%",
          fontFamily: "Open Sans",
          fontStyle: " normal",
          fontWeight: " 300",
          fontSize: "15px",
          lineHeight: "150%",
          color: "#202020",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A illo, quis
          aliquid voluptatum pariatur nostrum dolor exercitationem totam nulla,
          minus molestias praesentium repellat ducimus. Corporis illum
          laboriosam commodi. Excepturi in optio, cum ullam facilis ad
          temporibus rem necessitatibus voluptas aliquam ipsa. Odio, optio! Unde
          repellat nisi ipsa error minus adipisci repellendus fugiat itaque
          obcaecati enim placeat quam sint, quibusdam autem modi eum quae quas
          asperiores quia distinctio ea magnam. Repudiandae a commodi iste
          ducimus atque corporis eaque, vel culpa dolore facere ex illo sequi
          odit modi, est dolor perferendis vero eveniet velit temporibus vitae.
          Culpa earum amet porro nisi officia?
        </p>
        _{product.type}_
      </h4>
      <hr color="red" />
    </Box>
  );
};

export default DetailsPage;
