import React from "react";
import TopNavbar from "./components_second/Navbar/TopNavbar";
import SideNavbar from "./components_second/Navbar/SideNavbar";


const ItemSection =({product,setProduct,category,setCategory}) => {
    return (
        <>
        <TopNavbar product={product} category={category} />
            <SideNavbar product={product} category={category} />
            </>
    )
}
export default ItemSection