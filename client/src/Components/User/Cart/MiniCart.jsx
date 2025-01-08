// import React from "react";
// import OrderProducts from "../Order/OrderProducts";
// const MiniCart = () => {
//   return (
//     <div>
//       <div>
//         <h2>your cart have 2 items</h2>
//         <OrderProducts />
//       </div>
//       <div>
//         <div className="flex justify-between">
//           <h2>Subtotal</h2>
//           <p>200$</p>
//         </div>
//         <div>
//           <button>View Cart</button>
//           <button>Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MiniCart;

import React, { useState } from "react";
import OrderProducts from "../Order/OrderProducts";
import image from "../../../assets/Bags.png";
import { useNavigate } from "react-router-dom";
const MiniCart = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with adjustable DPI",
      quantity: 2,
      price: 25.99,
      imageUrl: image,
      Size: "S",
    },
    {
      id: 2,
      name: "Gaming Keyboard",
      description: "RGB mechanical keyboard with blue switches",
      quantity: 1,
      price: 79.99,
      imageUrl: image,
      Size: "L",
    },
  ]);

  const incrementQuantity = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const totalQuantity = products.reduce((sum, product) => sum + product.quantity, 0);
  const subtotal = products.reduce((sum, product) => sum + product.quantity * product.price, 0);

  return (
    <div>
      <div>
        <h2>Your cart has {totalQuantity} {totalQuantity === 1 ? "item" : "items"}</h2>
        <OrderProducts
          products={products}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          deleteProduct={deleteProduct}
        />
      </div>
      <div>
        <div className="flex px-5 justify-between">
          <h2>Subtotal</h2>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center px-5 gap-2 w-full mt-4">
          <button onClick={()=>navigate('/checkout')}className="px-4 py-2 w-full rounded-md bg-gray-300">View Cart</button>
          <button onClick={()=>navigate('/shipping-address')} className="px-4 py-2 w-full rounded-md bg-blue-500 text-white">Checkout</button>
        </div> 
      </div>
    </div>
  );
};

export default MiniCart;