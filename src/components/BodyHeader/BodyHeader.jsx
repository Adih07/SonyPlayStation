import React from "react";

const BodyHeader = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        PlayStation — это игровая приставка и платформа от компании Sony,
        пользующаяся спросом миллионов пользователей по всему миру.
      </h1>

      <div>
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/Hz0t6kGgmn4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default BodyHeader;
