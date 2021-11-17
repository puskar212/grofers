

const NavbarCart = ({context}) => {
    const handleCart = () => {
        context.openCart()
          }
    return(
        <div>
        <i
          className="fas fa-shopping-cart"
          onClick={() => handleCart()}
        ></i>
         <p>{context.cart.length}</p>
      </div>
    )
}

export default NavbarCart;