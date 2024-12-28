import axios from "axios";

const BASE_URL = "https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io";


export const fetchAllOrders = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/orders`);
    return response.data.orders;
  } catch (error) {
    console.error("Error fetching all orders:", error);
    throw error;
  }
};
  
export const fetchUpcomingOrders = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/orders/upcoming`);
    return response.data.orders;
  } catch (error) {
    console.error("Error fetching upcoming orders:", error);
    throw error;
  }
};