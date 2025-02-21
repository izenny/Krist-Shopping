
import { axiosInstance } from "../Constants/Api";

// export const FetchProductApi = async (page = 1, limit = 20, filter = {}) => {
//   try {
//     // Construct the query string based on filter
//     const query = Object.keys(filter)
//       .map((key) => `${key}=${encodeURIComponent(filter[key])}`)
//       .join("&");

//     const response = await axiosInstance.get(`/products?page=${page}&limit=${limit}&${query}`);
//     console.log("Fetched Products:", response.data);
//     return response.data; // Should return { products, totalPages, currentPage }
//   } catch (error) {
//     console.log("Error fetching products:", error);
//     return { products: [], totalPages: 1 };
//   }
// };

export const FetchProductApi = async (page = 1, limit = 20, filter = {}) => {
  try {
    // Remove empty values from the filter object
    const validFilter = Object.fromEntries(
      Object.entries(filter).filter(([_, value]) => value !== "" && value !== null && value !== undefined)
    );

    // Construct the query string based on valid filters
    const query = Object.keys(validFilter)
      .map((key) => `${key}=${encodeURIComponent(validFilter[key])}`)
      .join("&");
    const response = await axiosInstance.get(`/products?page=${page}&limit=${limit}&${query}`);
    console.log("Fetched Products:", response.data);
    return response.data; // Should return { products, totalPages, currentPage }
  } catch (error) {
    console.log("Error fetching products:", error);
    return { products: [], totalPages: 1 };
  }
};



export const FetchProductById = async ({id}) => {
  // console.log(id);
  
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    console.log("product", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
