// import React, { useState } from "react";
// import OrderProducts from "../../../Components/User/Order/OrderProducts";
// import image from "../../../assets/Bags.png";
// const Checkout = () => {
//   const [products, setProducts] = useState([
//       {
//         id: 1,
//         name: "Wireless Mouse",
//         description: "Ergonomic wireless mouse with adjustable DPI",
//         quantity: 2,
//         price: 25.99,
//         imageUrl: image,
//         Size: "S",
//       },
//       {
//         id: 2,
//         name: "Gaming Keyboard",
//         description: "RGB mechanical keyboard with blue switches",
//         quantity: 1,
//         price: 79.99,
//         imageUrl: image,
//         Size: "L",
//       },
//     ]);

//     const incrementQuantity = (id) => {
//       setProducts((prev) =>
//         prev.map((product) =>
//           product.id === id
//             ? { ...product, quantity: product.quantity + 1 }
//             : product
//         )
//       );
//     };

//     const decrementQuantity = (id) => {
//       setProducts((prev) =>
//         prev.map((product) =>
//           product.id === id && product.quantity > 1
//             ? { ...product, quantity: product.quantity - 1 }
//             : product
//         )
//       );
//     };

//     const deleteProduct = (id) => {
//       setProducts((prev) => prev.filter((product) => product.id !== id));
//     };

//     const totalQuantity = products.reduce((sum, product) => sum + product.quantity, 0);
//     const subtotal = products.reduce((sum, product) => sum + product.quantity * product.price, 0);
//   return (
//     <div className="w-full p-2">
//       <h2>Checkout</h2>
//       <div className="flex ">
//       <OrderProducts
//           products={products}
//           incrementQuantity={incrementQuantity}
//           decrementQuantity={decrementQuantity}
//           deleteProduct={deleteProduct}
//         />
//         <div>
//           <div>
//             <div className="font-medium flex justify-between">
//               <h2>Subtotal</h2>
//               <p>500$</p>
//             </div>
//             <div>
//               <p>Enter Discount Code</p>
//               <div className="border"><input type="text" className="h-full" /><button className="h-full px-2">Apply</button></div>
//             </div>
//             <div className="font-medium flex justify-between">
//               <h2>Delivery Charge</h2>
//               <p>500$</p>
//             </div>
//             <div className="font-medium flex justify-between">
//               <h2>Grand Total</h2>
//               <p>500$</p>
//             </div>
//             <div>
//               <button>Proceed to Checkout</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

import React, { useState } from "react";
import OrderProducts from "../../../Components/User/Order/OrderProducts";
import image from "../../../assets/Bags.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () => {
  const navigate = useNavigate()
  const { items,subTotal, isLoading } = useSelector((state) => state.cart);
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

  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const deliveryCharge = 10; // Example delivery charge

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

  const applyDiscount = () => {
    if (discountCode === "SAVE10") {
      setDiscountAmount(10); // Apply a flat discount of $10
    } else {
      alert("Invalid discount code");
      setDiscountAmount(0);
    }
  };

  const subtotal = products.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0
  );
  const grandTotal = Math.max(subtotal - discountAmount + deliveryCharge, 0);

  return (
    <div className="md:p-10 p-5 w-full ">
      <h2 className="md:text-2xl  font-semibold mb-4">Checkout</h2>

      <div className="flex justify-between flex-col items-center md:flex-row gap-5 ">
        {/* Product Listing */}
        <OrderProducts
          products={items}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          deleteProduct={deleteProduct}
        />

        {/* Summary Section */}
        <div className="mt-5  border flex flex-col justify-center p-5 px-10  rounded-lg">
          {/* Subtotal */}
          <div className="font-medium flex border-b py-3 justify-between mb-3">
            <h2>Subtotal</h2>
            <p>${subtotal.toFixed(2)}</p>
          </div>

          {/* Discount Section */}
          <div className="mb-4 flex flex-col justify-center ">
            <p className="mb-2 text-sm font-medium">Enter Discount Code</p>
            <div className="flex items-center border bg-white justify-center rounded-lg">
              <input
                type="text"
                className=" outline-none border-0 rounded-lg  flex-1 px-2 py-2"
                placeholder="Discount Code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button
                className="h-full px-5 py-2 border-black border bg-black  text-white rounded-r-lg"
                onClick={applyDiscount}
              >
                Apply
              </button>
            </div>
            {discountAmount > 0 && (
              <p className="text-green-500 mt-2">
                Discount Applied: -${discountAmount.toFixed(2)}
              </p>
            )}
          </div>

          {/* Delivery Charge */}
          <div className="font-medium flex justify-between mb-3">
            <h2>Delivery Charge</h2>
            <p>${deliveryCharge.toFixed(2)}</p>
          </div>

          {/* Grand Total */}
          <div className="font-semibold flex border-t pt-4 justify-between text-lg mb-6">
            <h2>Grand Total</h2>
            <p>${grandTotal.toFixed(2)}</p>
          </div>

          {/* Checkout Button */}
          <div className="w-full flex items-center justify-center">
            <button onClick={()=>navigate('/shipping-address')} className="px-10 py-3 bg-black text-white rounded-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
