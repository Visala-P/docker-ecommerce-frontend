import axios from "axios";

<<<<<<< HEAD
// Use relative paths so nginx (frontend) can proxy to backend service
const API_BASE_URL = "/api/products";
=======
const API_BASE_URL = "http://localhost:8081/api/products";  // Backend API URL
>>>>>>> ac41b796bdb220c43cf9e6592c63299e02ba9c1d

// Fetch products by category (computers, mobiles, laptops, pendrives, or all)
export const getProducts = async (category = "") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${category}`);
<<<<<<< HEAD
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Get product image URL (served through nginx proxy)
export const getProductImageUrl = (imagePath) => {
  return `/api/products/images/${imagePath}`;
=======
    return response.data;  // Return products array
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array on error
  }
};

// Get product image URL
export const getProductImageUrl = (imagePath) => {
  return `http://localhost:8080/api/products/images/${imagePath}`;
>>>>>>> ac41b796bdb220c43cf9e6592c63299e02ba9c1d
};
