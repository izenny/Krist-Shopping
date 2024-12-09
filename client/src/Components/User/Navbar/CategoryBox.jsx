import React from "react";

const CategoryBox = () => {
  return (
    <div className=" md:w-full  p-5 grid grid-cols-1 md:grid-cols-4  ">
      <div className="md:border-r-2 space-y-2 pl-10">
        {/* men  */}
        <div className="space-y-2">
          <h2 className="font-medium text-lg">Men</h2>
          <ul className="pl-2 space-y-3">
            <li>T-Shirts</li>
            <li>Casual Shirts</li>
            <li>Formal Shirts</li>
            <li>Jackets</li>
            <li>Blazers & Coats</li>
          </ul>
        </div>
        {/* indian and festive wear */}
        <div className="space-y-2">
          <h2 className="font-medium text-lg">Indian & Festive Wear</h2>
          <ul className="pl-2 space-y-3">
            <li>Kurtas & Kurta Sets</li>
            <li>Sherwanis</li>
          </ul>
        </div>
      </div>
      <div className="md:border-r-2 space-y-2 pl-10">
        {/* women */}
        <div className="space-y-2">
            <h2 className="font-medium text-lg">Women</h2>
          <ul className="pl-2 space-y-3">
            <li>Kurtas & Suits</li>
            <li>Sarees</li>
            <li>Ethnic Wear</li>
            <li>Lehenga Cholis</li>
            <li>Jackets</li>
          </ul>
        </div>
        {/* western wear  */}
        <div className="space-y-2">
          <h2 className="font-medium text-lg">Western Wear</h2>
          <ul className="pl-2 space-y-3">
            <li>Dresses</li>
            <li>Jumpsuits</li>
          </ul>
        </div>
      </div>
      <div className="md:border-r-2 space-y-2 pl-10">
        {/* footwere  */}
        <div className="space-y-2">
          <h2 className="font-medium text-lg">Footwear</h2>
          <ul className="pl-2 space-y-3">
            <li>Flats</li>
            <li>Casual Shoes</li>
            <li>Heels</li>
            <li>Boots</li>
            <li>Sports Shoes & Floaters</li>
          </ul>
        </div>
        {/* product features  */}
        <div className="space-y-2">
          <h2 className="font-medium text-lg">Product Features</h2>
          <ul className="pl-2 space-y-3">
            <li>360 product Viewer</li>
            <li>Product with Video</li>
          </ul>
        </div>
      </div>
      <div className="pl-10 space-y-2">
        {/* kids  */}
        <div className="space-y-2">
          <h2 className="font-medium text-lg">Kids</h2>
          <ul className="pl-2 space-y-3">
            <li>T-Shirts</li>
            <li>Shirts</li>
            <li>Jeans</li>
            <li>Trousers</li>
            <li>Party Wear</li>
            <li>Innerwear & Thermal</li>
            <li>Track Pants</li>
            <li>Value Pack</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryBox;
