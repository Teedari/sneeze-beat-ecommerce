import React from "react";

const Tile = ({img,middleCenteredText, middleText, middleBottomText, endText, children }) => {
  return (
    <div className="tile">
      <div className=" tile-image">
        <div className="image-container">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="flex justify-between items-center flex-auto">
        <div className="">
          <h4 className="text-slate-400 truncate w-72">{middleText}</h4>
          <small className="text-sm text-white">{middleBottomText}</small>
        </div>
        <h5 className="text-primary">{endText}.00</h5>

      </div>
      <div
        className="tile-absolute"
        onClick={() => {}}>
        {children}
      </div>
    </div>
  );
};

export default Tile;
