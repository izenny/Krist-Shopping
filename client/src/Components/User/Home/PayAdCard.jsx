import React from "react";

const cardData = [
  {
    id: 1,
    icon: "🚚", 
    title: "Free Shipping",
    description: "Free shipping for orders above $150",
  },
  {
    id: 2,
    icon: "💳",
    title: "Easy Payment",
    description: "Multiple payment options available.",
  },
  {
    id: 3,
    icon: "🔒",
    title: "Secure Checkout",
    description: "100% secure checkout with encryption.",
  },
  {
    id: 4,
    icon: "🛍️",
    title: "Exclusive Deals",
    description: "Get exclusive deals and discounts regularly.",
  },
];

const PayAdCard = () => {
  return (
    <div className="grid m-5 p-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map(({ id, icon, title, description }) => (
        <div
          key={id}
          className="border p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center"
        >
          <div className="text-4xl mb-2">{icon}</div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default PayAdCard;
