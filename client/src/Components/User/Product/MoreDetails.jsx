import React from 'react';

const MoreDetails = ({product}) => {
  return (
    <div className="p-6 ">
      <h2 className="text-lg font-semibold mb-4 ">
        Brand <span className="font-normal ">{product?.brand}</span>
      </h2>
      <h2 className="text-lg font-semibold mb-4 ">
        Category <span className="font-normal ">{product?.category}</span>
      </h2>
      <h2 className="text-lg font-semibold mb-4 ">
        Gender <span className="font-normal ">{product?.gender}</span>
      </h2>
      <h2 className="text-lg font-semibold mb-4 ">
        Color <span className="font-normal ">red, blue, orange</span>
      </h2>
   
      <h2 className="text-lg font-semibold ">
        Size <span className="font-normal ">S, M, XL, XXL</span>
      </h2>
    </div>
  );
}

export default MoreDetails;
