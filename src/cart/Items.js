import React from "react";

const Items = ({ item }) => {
  return (
    <div>
      <div>
        <img src={item.images} alt="img" />
      </div>
      <div>
        <p>{item.productName}</p>
        <p>Rs.{item.unitPrice}</p>
        <div>
          <p>
            {item.unitStartPoint} {item.unitType}{" "}
          </p>
          <div>
            <button >-</button>
            <input type="text" placeholder={item.unitVariation} />
            <button >+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
