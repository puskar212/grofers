import React from "react";
import data from "../../assets/offers.json";

function Offers() {
  return (
    <div>
      <div>
        <h3>Best Offers on products</h3>
      </div>
      {data.map((e) => {
        return (
            <div>
          <div
            style={{
              backgroundImage: `url("https://i.imgur.com/iyC8wsL.jpg")`,
            }}
          >
              <div>
                  <h3>{e.heading}</h3>
                  <p>{e.offers}</p>
                  <p>{e.number}</p>
                  <button>{e.shopButton}</button>
              </div>
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default Offers;
