import React from "react";
import ProductFilter from "../../../Components/User/Product/ProductFilter";
import Product from "../../../Components/User/Product/Product";

const ProductListing = () => {
  return (
    <div className="flex ">
      {/* left filter  */}
      <div className="border m-5 rounded-lg">
        <ProductFilter/>
      </div>
      {/* right product and sort */}
      <div className=" ">
        <Product/>
      </div>
    </div>
  );
};

export default ProductListing;
