import axios from "axios";

// Use relative paths so nginx (frontend) can proxy to backend service
const API_BASE_URL = "/api/products";

// Fetch products by category (computers, mobiles, laptops, pendrives, or all)
export const getProducts = async (category = "") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Get product image URL (served through nginx proxy)
export const getProductImageUrl = (imagePath) => {
  return `/api/products/images/${imagePath}`;
};
