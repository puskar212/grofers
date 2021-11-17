import React, { Component } from "react";

export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: -1,
      categories: [],
      products: [],
      cart: [],
      open: false,
      totalAmount: 0,

      handleActive: (val) => {
        this.setState({ active: val });
      },
      addCart: (id) => {
        let index = this.state.cart.findIndex((e) => e._id === id);
        let arr=[...this.state.cart]
        console.log(arr);
        if (index < 0) {
          let obj = this.state.products.find((e) => e._id === id);
          const { inventory, unitStartPoint } = obj;
          if (inventory >= unitStartPoint) {
            console.log("IFF ..........");
            let c = [...this.state.cart, { ...obj, count: unitStartPoint }];
            let totalAmount = this.state.cart.reduce((av, cv) => {
              console.log(av);
              let singletotal = cv.unitPrice * cv.count;
              av = singletotal + av;
              return av;
            }, 0);
            return this.setState({ cart: c , totalAmount});
          }
        } else {
          let obj = this.state.cart[index];
          const { inventory, count, unitVariation } = obj;

          if (inventory - count >= unitVariation) {
            let cart = [
              ...this.state.cart.slice(0, index),
              { ...obj, count: count + unitVariation },
              ...this.state.cart.slice(index + 1),
            ];
            return this.setState({ cart });
          }
        }
      },

      removeCart: (id) => {
        let index = this.state.cart.findIndex((e) => e._id === id);
        const obj = this.state.cart.find((e) => e._id === id);
        const { inventory, count, unitVariation, unitStartPoint } = obj;

        // console.log(obj, index);
        if (count === unitStartPoint) {
          console.log("...........else");
          let arr = [...this.state.cart];
          arr.splice(index, 1);
          this.setState({ cart: arr });
        } else {
          console.log("..........if");
          let cart = [
            ...this.state.cart.slice(0, index),
            { ...obj, count: count - unitVariation },
            ...this.state.cart.slice(index + 1),
          ];
          return this.setState({ cart });
        }
      },
      openCart: () => {
        console.log("..........cart");
        this.setState({ open: true });
      },
      closeCart: () => {
        console.log("..........cart");
        this.setState({ open: false });
      },
      Amount: (id) => {
        // let obj = ;
        // let arr = [obj];
        let obj = this.state.products.find((e) => e._id === id);
        let initialvalue = obj.unitPrice * obj.unitStartPoint
        let totalAmount = this.state.cart.reduce((av, cv) => {
          console.log(av);
         return av + cv.unitPrice * cv.count;
          
         
        }, initialvalue);
        this.setState({ totalAmount });
      },
    };
  }

  componentDidMount() {
    (async () => {
      const a = await fetch(
        "https://powerful-dawn-74322.herokuapp.com/api/category"
      );
      const categories = await a.json();
      const x = await fetch(
        "https://powerful-dawn-74322.herokuapp.com/api/product"
      );
      const products = await x.json();
      this.setState({ products, categories });
    })();
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
