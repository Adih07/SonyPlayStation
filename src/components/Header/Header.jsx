import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <div>
          <h1 style={{ textAlign: "center" }}>Sony Playstation</h1>
          <div>
            <video width="100%" height="100%" controls>
              <source
                src="https://media.direct.playstation.com/is/content/sierialto/god-of-war-ragnarok-game-cg-trailer"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
