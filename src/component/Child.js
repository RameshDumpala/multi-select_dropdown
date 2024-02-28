import React, { useState } from "react";
import "./Child.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
// import { TiTick } from "react-icons/ti";
const Child = () => {
  const options = [
    { value: "Red", label: "Red" },
    { value: "Green", label: "Green" },
    { value: "Yellow", label: "Yellow" },
    { value: "White", label: "White" },
    { value: "pink", label: "pink" },
    { value: "Purple", label: "Purple" },
    { value: "Black", label: "Black" },
  ];
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState(options);
  const [select, setSelect] = useState([]);

  const handleactive = () => {
    setIsActive(!isActive);
  };
  const handleitem = (item) => {
    console.log(item);
    const arr = [...select];
    arr.push(item);
    setSelect(arr);
    setIsActive(false);
  };
  const handledelete = (i) => {
    const arr1 = [...select];
    arr1.splice(i, 1);
    setSelect(arr1);
  };
  const handlecrooss = (i) => {
    const arr2 = [...select];
    arr2.splice(i);
    setSelect(arr2);
  };

  return (
    <div>
      <div className="box">
        {select.map((item, i) => (
          <div className="select_item">
            {item}{" "}

              <RxCross2 className="select_cross" onClick={() => handledelete(i)} />

          </div>
        ))}

       {select.length > 0 ? <RxCross2 className="cross_icon" onClick={(i) => handlecrooss(i)} />:''} 
        <RiArrowDropDownLine className="dropicon"  onClick={handleactive} />
      </div>
      {isActive && (
        <div className="card">
          {data.map((item) =>
            !select.includes(item.label) ? (
              <div className="map_div" onClick={() => handleitem(item.label)}>
                {item.label}
                {/* <span> {data === item && <TiTick />}</span> */}
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default Child;
