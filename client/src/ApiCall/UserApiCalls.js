//fetch user details

import { axiosInstance } from "../Constants/Api";

export const fetchUserDetails = async () => {
  try {
    const response = await axiosInstance.get(`user/userdata`);
    console.log("User details:", response.data);
    
    return response.data;
  } catch (error) {
    console.error("Error in fetching user details:", error);
    return null;
  }
}

// fetch user address 

export const fetchUserAddress = async () => {
  try {
    const response = await axiosInstance.get(`user/address`);
    console.log("User address:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in fetching user address:", error);
    return null;
  }
}

// add user address

export const addUserAddress = async (address) => {
  try {
    const response = await axiosInstance.post(`user/createaddress`, address);
    console.log("Address added:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in adding address:", error);
    return null;
  }
}