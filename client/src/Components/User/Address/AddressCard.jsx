// import React from "react";

// const AddressCard = ({ address, isSelected, onSelect, onDelete, onEdit }) => {
//   return (
//     <div className="border rounded-lg p-4 shadow-sm flex flex-col justify-between">
//       <div className="flex items-start">
//         <input
//           type="checkbox"
//           className="mr-3 mt-1"
//           checked={isSelected}
//           onChange={() => onSelect(address)}
//         />
//         <div>
//           <p className="font-semibold text-lg">{address.name}</p>
//           <p>{address.phone}</p>
//           <p>{address.addressLine}</p>
//           <p>{`${address.city}, ${address.state} - ${address.zip}`}</p>
//         </div>
//       </div>
//       <div className="flex justify-end mt-4 gap-2">
//         <button
//           className="px-4 py-2 bg-gray-500 text-white rounded-lg"
//           onClick={() => onEdit(address)}
//         >
//           Edit
//         </button>
//         <button
//           className="px-4 py-2 bg-red-500 text-white rounded-lg"
//           onClick={() => onDelete(address)}
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddressCard;

import React from "react";

import { HiHomeModern } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";

const AddressCard = ({ address, onSelect, onDelete, isSelected }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col justify-between">
      <div className="flex items-start">
       { onselect && <input
          type="checkbox"
          className="mr-3 mt-1 size-5"
          checked={isSelected}
          onChange={() => onSelect(address)}
        />}
        <div className="space-y-1">
          <p className="font-semibold text-lg">{address?.name}</p>
          <p className="flex items-center gap-2"> <IoCall/>{address?.phone}</p>
          <p className="flex items-center gap-2"><HiHomeModern/>{address?.addressLine1}</p>
          <p className="pl-6">{address?.addressLine2}</p>
          <p className="pl-6">{`${address?.city}, ${address?.state} - ${address?.postalCode}`}</p>
        </div>
      </div>
      <div className="flex justify-around gap-2 mt-4">
        <button
          className="px-4 py-2 w-1/3 bg-black text-white rounded-md"
          onClick={() => alert(`Editing address: ${address?.name}`)}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 w-1/3 bg-black hover:bg-red-600 text-white rounded-md"
          onClick={() => onDelete(address)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
