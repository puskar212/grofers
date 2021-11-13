import React from 'react'
import data from "../../assets/blockbuster.json";


function Snacks() {
    return (
        <div>
            <div>
        <h3>Snacks,Drinks,Dairy & More</h3>
        <input type="button" value="see more" />
      </div>
      <div>
        {data.map((e) => {
          return (
            <div>
              <div>
                <img src={e.imgUrl} alt="image" />
              </div>
              <div>
                <p>{e.price}</p>
                <p>{e.prevprice}</p>
              </div>
              <div>
                <p>{e.itemName}</p>
                <p>{e.netWt}</p>
              </div>
              <div>
                <button>add</button>
              </div>
            </div>
          );
        })}
        </div>
        </div>
    )
}

export default Snacks
