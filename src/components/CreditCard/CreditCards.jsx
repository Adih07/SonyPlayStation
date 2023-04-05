import PriceCheckIcon from "@mui/icons-material/PriceCheck";

import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";

export default function PaymentForm() {
  const [state, setState] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const navigate = useNavigate();
  return (
    <div
      id="PaymentForm"
      style={{
        marginTop: "20px",
        marginBottom: "20px",
        textAlign: "center",
      }}
    >
      <Cards
        cvc={state.cvc}
        expiry={state.expiry}
        focused={state.focus}
        name={state.name}
        number={state.number}
      />
      <br />
      <form>
        <div>
          <input
            onChange={(e) => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
            type="number"
            name="number"
            placeholder="Card Number"
          />
        </div>
        <div>
          <input
            onChange={(e) => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
            type="tel"
            name="name"
            placeholder="Card Name"
          />
        </div>
        <div>
          <input
            onChange={(e) => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
            type="number"
            name="cvc"
            placeholder="cvc"
          />
        </div>
        <div>
          <input
            onChange={(e) => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
            type="number"
            name="expiry"
            placeholder="expiry"
          />
        </div>
      </form>
      <br />
      <div>
        <p onClick={() => navigate("/you")} style={{ cursor: "pointer" }}>
          <PriceCheckIcon />{" "}
        </p>
      </div>
    </div>
  );
}
