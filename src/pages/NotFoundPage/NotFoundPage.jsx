import React from "react";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

const NotFoundPage = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "100px",
      }}
    >
      <div>
        {" "}
        <ReportGmailerrorredIcon fontSize="large" />
      </div>
      <br />
      <div>
        <span>Страница не найдена</span>
      </div>
    </div>
  );
};

export default NotFoundPage;
