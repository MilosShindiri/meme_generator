import React from "react";

export default function Main() {
  const [memeInfo, setMemeInfo] = React.useState({
    img: "http://i.imgflip.com/1bij.jpg",
    top: "One does not simply",
    bottom: "Walk into Mordor",
  });
  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input type="text" placeholder="One does not simply" name="topText" />
        </label>

        <label>
          Bottom Text
          <input type="text" placeholder="Walk into Mordor" name="bottomText" />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={memeInfo.img} />
        <span className="top">{memeInfo.top}</span>
        <span className="bottom">{memeInfo.bottom}</span>
      </div>
    </main>
  );
}
