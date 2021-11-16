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
      totalItem: 0,

      handleActive: (val) => {
        this.setState({ active: val });
      },
      addCart: (id) => {
        let index = this.state.cart.findIndex((e) => e._id === id);

        console.log(index);

        if (index < 0) {
          let obj = this.state.products.find((e) => e._id === id);
          // if (obj.inventory > 0) {
          //   let arr2 = [...obj]
          //   let { unitStartPoint } = arr2.reduce(
          //     (av, cv) => {
          //       let { unitVariation } = cv;
          //       av.unitStartPoint += unitVariation;
          //       return av
          //     },
          //     { unitStartPoint: obj.unitStartPoint }
          //   );
          //   return{
          //     ...obj,unitStartPoint
          //   }
          // }
          if (obj.inventory > 0) {
            let c = [
              ...this.state.cart,
              {
                ...obj,
                count: 1,
                Item: obj.unitStartPoint,
                inventory: obj.inventory - obj.unitStartPoint,
              },
            ];

            return this.setState({ cart: c });
          }
          // let c = [...this.state.cart, { ...obj, count: 1,totalItem }];
          // this.setState({ cart: c });
        } else {
          let arr = [...this.state.cart];
          let obj = arr[index];
          arr.splice(index, 1);
          if (obj.inventory > 0) {
            let c = [
              ...arr,
              {
                ...obj,
                count: obj.count + 1,
                Item: obj.Item + obj.unitVariation,
                inventory: obj.inventory - obj.unitVariation,
              },
            ];
            return this.setState({ cart: c });
          }
        }
        //   let c = [...arr, { ...obj, count: obj.count + 1 }];
        //   this.setState({ cart: c });
        // }
      },

      removeCart: (id) => {
        let index = this.state.cart.findIndex((e) => e._id === id);
        const obj = this.state.cart.find((e) => e._id === id);
        console.log(obj, index);
        if (obj.count > 1) {
          let arr = [...this.state.cart];
          arr.splice(index, 1);
          let c = [...arr, { ...obj, count: obj.count - 1 }];
          this.setState({ cart: c });
        } else {
          let arr = [...this.state.cart];
          arr.splice(index, 1);
          this.setState({ cart: arr });
        }
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
