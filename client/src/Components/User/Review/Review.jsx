// import React from "react";

// const Review = () => {
//   return (
//     <div>
//       <span>stars</span>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
//         temporibus, itaque enim impedit, consequuntur facere veritatis atque,
//         architecto quae illum assumenda omnis distinctio dolorum optio.
//       </p>
//       <div>
//         <img src="" alt="" />
//         <h2>name</h2>
//       </div>
//     </div>
//   );
// };

// export default Review;

// import React from 'react'
// import { FiStar } from "react-icons/fi"; 
// import user from '../../../assets/download4.jpg'
// const Review = () => {
//   return (
//     <div className="flex border p-3 flex-col items-center w-full lg:w-1/2 max-w-sm text-center">
//           <div className="flex justify-start flex-col items-center lg:flex-row lg:items-start w-full gap-4 mb-2">
//             <img src={user} alt="User" className="w-16 h-16 rounded-full" />
//             <div className="mb-1 lg:mt-2 text-center lg:text-left">
//               <h3 className="text-lg font-semibold">Lidiya</h3>
//               <div className="flex">
//                 {[...Array(5)].map((_, i) => (
//                   <FiStar key={i} className="text-yellow-500 fill-yellow-500 w-5 h-5" />
//                 ))}
//               </div>
//             </div>
//           </div>
//           <p className="text-sm text-left line-clamp-3">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam.
//           </p>
//         </div>
//   )
// }

// export default Review

import React from "react";
import { FiStar } from "react-icons/fi"; 
import user from "../../../assets/download4.jpg";

const reviews = [
  {
    id: 1,
    name: "Lidiya",
    image: user,
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 2,
    name: "John Doe",
    image: user,
    rating: 4,
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Jane Smith",
    image: user,
    rating: 3,
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Review = () => {
  return (
    <div className="flex  m-5 flex-wrap justify-center gap-6">
      {reviews.map(({ id, name, image, rating, review }) => (
        <div
          key={id}
          className="flex rounded-lg gap-3 shadow-md py-7 border p-3 flex-col items-center w-full lg:w-1/2 max-w-sm text-center"
        >
          <div className="flex justify-start flex-col items-center lg:flex-row lg:items-start w-full gap-4 mb-2">
            <img src={image} alt={name} className="w-16 h-16 rounded-full" />
            <div className="mb-1 lg:mt-2 text-center lg:text-left">
              <h3 className="text-lg font-semibold">{name}</h3>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-left line-clamp-3">{review}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
