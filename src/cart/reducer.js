import React from "react";

const reducer = (state, action) => {
  if (action.type === "addition") {
    let ChangeInCart = state.productInfo.map((e) => {
      if (e._id === action.payload && e.inventory !== 0) {
        return {
          ...e,
          unitVariation: e.unitVariation + 1,
          inventory: e.inventory - 1,
        };
      }
      return e;
    });
    return {
      ...state,
      productInfo: ChangeInCart,
    };
  }
  if (action.type === "subtracting") {
    let ChangeInCart = state.productInfo.map((e) => {
      if (e._id === action.payload && e.unitVariation !== 1) {
        return {
          ...e,
          unitVariation: e.unitVariation - 1,
        };
      }
      return e;
    });
    return {
      ...state,
      productInfo: ChangeInCart,
    };
  }

  if (action.type === "itemtotal") {
    let { totalItem ,totalAmount } = state.productInfo.reduce(
      (av, cv) => {
        let  { unitVariation ,unitPrice } = cv;
        av.totalItem += unitVariation;
        av.totalAmount += unitVariation * unitPrice 
        return av
      },
      { totalItem: 0 , totalAmount : 0}
    );
    return {...state,totalItem,totalAmount}
  }

  return state;
};

export default reducer;
