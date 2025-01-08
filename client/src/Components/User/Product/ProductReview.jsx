// import React from "react";
// import Review from "../Review/Review";
// import user from "../../../assets/download4.jpg";

// const ProductReview = () => {
//   const reviews = [
//     {
//       id: 1,
//       name: "Lidiya",
//       image: user,
//       rating: 5,
//       review:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       image: user,
//       rating: 4,
//       review:
//         "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     },
//     {
//       id: 3,
//       name: "Jane Smith",
//       image: user,
//       rating: 3,
//       review:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//   ];

//   return (
//     <div className="w-full">
//       <h2>Customer Reviews</h2>
//       <div>
//         <div>
//           <div>
//             <img src={user} alt="" />
//           </div>
//           <div>
//             <h2>name</h2>
//             <p>star</p>
//           </div>
//         </div>
//         <div>
//             <h2>review head</h2>
//             <p>review content</p>
//             <p>review by name post on date</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductReview;


import React from "react";
import Review from "../Review/Review";
import user from "../../../assets/download4.jpg";

const ProductReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Lidiya",
      image: user,
      rating: 5,
      head: "Amazing Product!",
      date: "2023-12-01",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 2,
      name: "John Doe",
      image: user,
      rating: 4,
      head: "Good Value for Money",
      date: "2023-11-25",
      review:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      name: "Jane Smith",
      image: user,
      rating: 3,
      head: "Decent but Could Be Better",
      date: "2023-11-20",
      review:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <div className="w-full p-5">
      <h2 className="text-xl font-semibold">Customer Reviews</h2>
      <div className="p-5">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-300 py-4">
            <div className="flex items-center mb-2">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <p className="text-yellow-500">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-base mb-1">{review.head}</h4>
              <p className="text-gray-700 mb-2">{review.review}</p>
              <p className="text-sm text-gray-500">Reviewed by {review.name} on {new Date(review.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReview;
