import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isTokenValid } from "../util/useTokenExpiration";

export const apiUrl = "http://localhost:8000/api";

export let token = isTokenValid() ? localStorage.getItem("token") : "";
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${apiUrl}/users/login`, {
      email,
      password,
    });
    const expirationTime = new Date().getTime() + 3600000; // expiration time in milliseconds (1 hour)
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    token = response.data.token;
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const getFoodList = async () => {
  try {
    const response = await axios.get(`${apiUrl}/menu/food-details`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log("this is response in foods ", response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const getSingleFood = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/menu/food-details/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log("this is response in foods ", response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
export const qrlogin = async (qr) => {
  try {
    const response = await axios.post(`${apiUrl}/qr-login`, {
      qrcode: qr,
    });
    // console.log("header req ", response.data.token);
    token = response.data.token;
    localStorage.setItem("token", token);
    const expirationTime = new Date().getTime() + 3600000; // expiration time in milliseconds (1 hour)
    localStorage.setItem("expirationTime", expirationTime);
    return response.data.token;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
// export const getSingleFood = async (id) => {
//   try {
//     const response = await axios.get(`${apiUrl}/menu/food-details/${id}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     return error.message;
//   }

//   // console.log("this is token in sinfle food ", token);
//   // write for me a logic that sending the sinlge dat object to the food state in store

//   // console.log("this is response in sinfle food ", response);
// };

// export const getSingleFood = createAsyncThunk(
//   "/menu/food-details/:id",
//   async (id) => {
//     // console.log("this is token in sinfle food ", token);
//     try {
//       const response = await axios.get(`${apiUrl}/foods/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return response.data;
//     } catch (error) {
//       return error.message;
//     }
//   }
// );
export const createFood = async (food) => {
  try {
    const response = await axios.post(`${apiUrl}/foods`, food, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const updateFood = async (id, updates) => {
  try {
    const response = await axios.put(`${apiUrl}/foods/${id}`, updates, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const deleteFood = async (id) => {
  const response = await axios.delete(`${apiUrl}/foods/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getCategory = async () => {
  try {
    const response = await axios.get(`${apiUrl}/menu/categories`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("this is response in category ", response.data.category);

    let res = [];
    res.push(response.data.category);
    return res;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};

//    cart sectiuon
export const setSingleCart = async (id, { deskNumber, foodId, quantity }) => {
  try {
    const response = await axios.post(`${apiUrl}/carts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      body: {
        deskNumber,
        foodId,
        quantity,
      },
    });
    console.log("this is response in carts  id food ", response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const getCarts = async (deskNumber) => {
  try {
    const response = await axios.post(`${apiUrl}/carts`, {
      headers: { Authorization: `Bearer ${token}` },
      body: {
        deskNumber,
      },
    });
    console.log("this is response in get carts  carts ", response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
export const setOrderCart = async (
  id,
  { deskNumber, food_id, quantity, note }
) => {
  try {
    const response = await axios.post(`${apiUrl}/orders`, {
      headers: { Authorization: `Bearer ${token}` },
      body: {
        deskNumber,
        food_id,
        quantity,
        note,
      },
    });
    console.log("this is response in set order cart  ", response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
export const getOrderCart = async () => {
  try {
    const response = await axios.get(`${apiUrl}/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("this is response in carts  id food ", response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
export const cancelOrderCart = async (id_cart) => {
  try {
    const response = await axios.delete(`${apiUrl}/orders/${id_cart}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("this is response in carts  id food ", response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
/// note for food foodback
export const setFeedbackFood = async (
  id_food,
  { username, rating, description }
) => {
  try {
    const response = await axios.post(`${apiUrl}feedback/foods/${id_food}`, {
      headers: { Authorization: `Bearer ${token}` },
      body: {
        username,
        rating,
        description,
      },
    });
    console.log("this is response in carts  id food ", response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// ADMIN SECTION
// desk crud
export const getAllDesk = async () => {
  try {
    const response = await axios.get(`${apiUrl}/admin/desks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("this is response in get all desk ", response.data);

    return response.data.desk;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
export const setNewDesk = async (number) => {
  try {
    const response = await axios.post(`${apiUrl}/admin/desks`, {
      headers: { Authorization: `Bearer ${token}` },
      body: {
        number,
      },
    });
    console.log("this is response in set new desk ", response.data);

    return response.data.desk;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};

export const setUpdateDesk = async (id, number) => {
  try {
    const response = await axios.put(`${apiUrl}/admin/desks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      body: {
        number,
      },
    });
    console.log("this is response in set new desk ", response.data);

    return response.data.desk;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};

///subcategory crud
export const getAllSubCategory = async () => {
  try {
    const response = await axios.get(`${apiUrl}/admin/sub-categories`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("this is response in get all subcategory ", response.data);

    return response.data.subcategory;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
