import axios from "axios";

<<<<<<< HEAD
// Use relative API path so requests are proxied via nginx
const API_BASE = "/api/cart";
=======
const API_URL = "http://localhost:8081/api/cart";

const API_BASE = "http://localhost:8081/api/cart";
>>>>>>> ac41b796bdb220c43cf9e6592c63299e02ba9c1d

export const addToCart = async (userId, productId) => {
  return await axios.post(`${API_BASE}/add`, {
    userId,
    productId,
    quantity: 1
  });
};

export const getCartItems = async (userId) => {
  const response = await axios.get(`${API_BASE}/user/${userId}`);
  return response.data;
};

export const clearCart = async (userId) => {
  return await axios.delete(`${API_BASE}/clear/${userId}`);
};

// Remove Cart Item
export const removeCartItem = async (cartItemId) => {
<<<<<<< HEAD
  try {
    await axios.delete(`${API_BASE}/remove/${cartItemId}`);
  } catch (error) {
    console.error("Error removing item from cart", error);
  }
=======
    try {
        await axios.delete(`${API_URL}/remove/${cartItemId}`);
    } catch (error) {
        console.error("Error removing item from cart", error);
    }
>>>>>>> ac41b796bdb220c43cf9e6592c63299e02ba9c1d
};

