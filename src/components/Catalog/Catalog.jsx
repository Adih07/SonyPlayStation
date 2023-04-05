import React from "react";
import ps3 from "./imgCatalog/ps3.jpg";
import ps4 from "./imgCatalog/ps4.jpg";
import ps5 from "./imgCatalog/ps5.jpg";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        color: "white",
        backgroundImage: `url("https://rare-gallery.com/uploads/posts/4595241-simple-simple-background-gradient.jpg")`,
      }}
    >
      <div className="acsesuar">
        <div className="perehod">
          <h1
            style={{
              cursor: "pointer",
              fontSize: "24px",
              color: "white",
              marginLeft: "15px",
            }}
            onClick={() => navigate("/products")}
            id="catalogH1"
          >
            Перейти в каталог
          </h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <div>
            <span>
              <h2>Sony Playstation 3</h2>
              <h3>11000 сом</h3>
            </span>

            <img src={ps3} alt="" />
          </div>

          <div>
            <div>
              <span>
                <h2>Sony Playstation 4</h2>
                <h3>27000 сом</h3>
              </span>

              <img src={ps4} alt="" />
            </div>
          </div>

          <div>
            <div>
              <span>
                <h2>Sony Playstation 5</h2>
                <h3>78000 сом</h3>
              </span>

              <img src={ps5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
