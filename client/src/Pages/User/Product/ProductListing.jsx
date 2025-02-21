// import React, { useEffect, useState } from "react";
// import ProductFilter from "../../../Components/User/Product/ProductFilter";
// import Product from "../../../Components/User/Product/Product";
// import { FetchProductApi } from "../../../ApiCall/ProductApiCalls";

// const ProductListing = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [filter, setFilter] = useState({});

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const response = await FetchProductApi(currentPage, 15, filter);
//         setProducts(response.products);
//         setTotalPages(response.totalPages);

//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [currentPage, filter]); // Re-fetch products when page or filter changes

//   return (
//     <div className="flex flex-col items-center">
//       {/* Top: Filters and Products */}
//       <div className="flex w-full">
//         {/* Left filter */}
//         <div className="border m-4 rounded-lg">
//           <ProductFilter setFilter={setFilter} setCurrentPage={setCurrentPage}/>
//         </div>
//         {/* Right product list */}
//         <div className="flex-1">
//           <Product products={products} loading={loading} />
//         </div>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex gap-2 my-5">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span className="px-4 py-2 font-semibold">{currentPage} / {totalPages}</span>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductListing;

// import React, { useEffect, useState } from "react";
// import ProductFilter from "../../../Components/User/Product/ProductFilter";
// import Product from "../../../Components/User/Product/Product";
// import { FetchProductApi } from "../../../ApiCall/ProductApiCalls";
// import { useSearchParams } from "react-router-dom";

// const ProductListing = () => {
//   const [searchParams] = useSearchParams();
//   const category = searchParams.get("category");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [filter, setFilter] = useState({});

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       const newFilter = { ...filter };
//       if (category) {
//         newFilter.category = category;
//       }
//       try {
//         const response = await FetchProductApi(currentPage, 15, newFilter);
//         setProducts(response.products);
//         setTotalPages(response.totalPages);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [currentPage, filter]); // Re-fetch products when page or filter changes

//   return (
//     <div className="flex flex-col items-center">
//       {/* Top: Filters and Products */}
//       <div className="flex w-full">
//         {/* Left filter */}
//         <div className="border m-4 rounded-lg">
//           <ProductFilter
//             setFilter={setFilter}
//             setCurrentPage={setCurrentPage}
//           />
//         </div>
//         {/* Right product list */}
//         <div className="flex-1">
//           <Product products={products} loading={loading} />
//         </div>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex gap-2 my-5">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span className="px-4 py-2 font-semibold">
//           {currentPage} / {totalPages}
//         </span>
//         <button
//           onClick={() =>
//             setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//           }
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductListing;



import React, { useEffect, useState } from "react";
import ProductFilter from "../../../Components/User/Product/ProductFilter";
import Product from "../../../Components/User/Product/Product";
import { FetchProductApi } from "../../../ApiCall/ProductApiCalls";
import { useSearchParams } from "react-router-dom";

const ProductListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const color = searchParams.get("color");
  const size = searchParams.get("size");
  const gender = searchParams.get("gender");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const filters = {
        category,
        minPrice,
        maxPrice,
        color,
        size,
        gender,
      };

      try {
        const response = await FetchProductApi(currentPage, 15, filters);
        setProducts(response.products);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, category, minPrice, maxPrice, color, size, gender]); // Re-fetch when filters change

  return (
    <div className="flex flex-col items-center">
      {/* Filters & Products */}
      <div className="flex w-full">
        {/* Filter Section */}
        <div className="border m-4 rounded-lg">
          <ProductFilter setSearchParams={setSearchParams} setCurrentPage={setCurrentPage} />
        </div>
        {/* Product List */}
        <div className="flex-1">
          <Product products={products} loading={loading} />
        </div>
      </div>

      {/* Pagination */}
      <div className="flex gap-2 my-5">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 font-semibold">{currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductListing;
