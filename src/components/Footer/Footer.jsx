import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import ps from "./imgFooter/psfooter.png";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="footer" style={{ width: "100%" }}>
      <div style={{ justifyContent: "center" }}>
        <img src={ps} alt="" width={80} />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p
            style={{ cursor: "pointer" }}
            className={location.pathname == "/" ? "green" : "footer_list_text"}
            onClick={() => navigate(`/`)}
          >
            SonyPlaystation
          </p>

          <p
            style={{ cursor: "pointer" }}
            className={
              location.pathname == "/company" ? "green" : "footer_list_text"
            }
            onClick={() => navigate(`/company`)}
          >
            Info
          </p>

          <p
            style={{ cursor: "pointer" }}
            className={
              location.pathname == "/products" ? "green" : "footer_list_text"
            }
            onClick={() => navigate(`/products`)}
          >
            Accessories
          </p>

          <p
            style={{ cursor: "pointer" }}
            className={
              location.pathname == "/contacts" ? "green" : "footer_list_text"
            }
            onClick={() => navigate(`/contacts`)}
          >
            Contact us
          </p>
        </div>
        <hr color="red" />
        <div
          style={{ display: "flex", justifyContent: "end" }}
          className="footer_list"
          id="footer_info_data"
        >
          <a href="https://www.facebook.com/playstation/">
            <FacebookIcon id="FacebookIcon" />
          </a>
          <a href="https://twitter.com/PlayStationRU">
            <TwitterIcon id="TwitterIcon" />
          </a>
          <a href="https://www.instagram.com/playstation/">
            <InstagramIcon id="InstagramIcon" />
          </a>

          <a href="https://www.youtube.com/channel/UCuxCfwN3SbOX2LR2sG-MoLw">
            <YouTubeIcon id="YouTubeIcon" />
          </a>
        </div>
        <div className="footer_end" style={{ textAlign: "center" }}>
          © 2022 - 2023 Playstation. Все права защищены.
        </div>
      </div>
    </div>
  );
};

export default Footer;
