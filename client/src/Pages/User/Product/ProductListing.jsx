
import React, { useEffect, useState } from "react";
import ProductFilter from "../../../Components/User/Product/ProductFilter";
import Product from "../../../Components/User/Product/Product";
import { FetchProductApi } from "../../../ApiCall/ProductApiCalls";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await FetchProductApi(currentPage, 10, filter);
        setProducts(response.products);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, filter]); // Re-fetch products when page or filter changes

  return (
    <div className="flex flex-col items-center">
      {/* Top: Filters and Products */}
      <div className="flex w-full">
        {/* Left filter */}
        <div className="border m-5 rounded-lg">
          <ProductFilter setFilter={setFilter} />
        </div>
        {/* Right product list */}
        <div className="flex-1">
          <Product products={products} loading={loading} />
        </div>
      </div>

      {/* Pagination Controls */}
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
