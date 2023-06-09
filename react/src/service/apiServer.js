import axios from "axios";
import { isTokenValid } from "../util/useTokenExpiration";

export const apiUrl = "http://localhost:8000/api";

export let token = isTokenValid() ? localStorage.getItem("token") : "";
export const login = async (email, password) => {
  console.log("header req ", email, password);
  try {
    const response = await axios.post(`${apiUrl}/login`, {
      email,
      password,
    });
    token = response.data.token;
    console.log("header req ", response.data.token);
    const expirationTime = new Date().getTime() + 3600000; // expiration time in milliseconds (1 hour)
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
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
      withCredentials: false,
    });
    // console.log("this is response in foods in axios ", response.data.data);
    return response.data.data;
  } catch (error) {
    return error.message;
  }
};

export const getSingleFood = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/menu/food-details/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      "Access-Control-Allow-Origin": "*",
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
// create a get for this end point menu/categories/:id
export const getSingleCategory = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/menu/categories/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("this is response in  sub category ", response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
//    cart sectiuon
export const setSingleCart = async (id, { deskNumber, foodId, quantity }) => {
  try {
    const response = await axios.post(
      `${apiUrl}/carts/${id}`,
      { deskNumber: deskNumber, foodId: foodId, quantity: quantity },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    // console.log("this is response in carts  id food ", response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
// creating and end ponit with the carts/:id as apost o store the carts
export const setCart = async (deskNumber, foodId, quantity) => {
  // console.log("this is response in carts  id food ", deskNumber, foodId);
  try {
    const response = await axios.post(
      `${apiUrl}/carts/${foodId}`,
      { deskNumber: deskNumber, foodQuantity: quantity },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
export const getCarts = async (deskNumber) => {
  try {
    const response = await axios.post(
      `${apiUrl}/carts`,
      {
        deskNumber,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("this is response in get carts  carts ", response.data.cart);
    return response.data.cart;
  } catch (error) {
    return error.message;
  }
};
export const setOrderCart = async (food_id, desk_id, quantity, note) => {
  try {
    const response = await axios.post(
      `${apiUrl}/orders`,
      { food_id, desk_id, quantity, note },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
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
    console.log("this is response in get order cart  ", response.data.data[0]);
    return response.data.data[0];
  } catch (error) {
    return error.message;
  }
};
export const cancelOrderCart = async (id_cart) => {
  try {
    const response = await axios.delete(`${apiUrl}/orders/${id_cart}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
};
/// note for food foodback
export const setFeedbackFood = async (
  id_food,
  username,
  rating,
  description
) => {
  try {
    const response = await axios.post(
      `${apiUrl}/feedback/foods/${id_food}`,
      {
        username,
        rating,
        description,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("this is response setFeedbackFood ", response.data);
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

    return response.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
export const setNewDesk = async (number) => {
  try {
    const response = await axios.post(
      `${apiUrl}/admin/desks`,
      { number },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("this is response in set new desk ", response.data);

    return response.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};

export const setUpdateDesk = async (id, number) => {
  try {
    const response = await axios.put(
      `${apiUrl}/admin/desks/${id}`,
      { number },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("this is response in set new desk ", response.data);

    return response.data;
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
    // console.log("this is response in get all subcategory ", response.data);

    return response.data.sub_category.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
export const setNewSubCategory = async (name, categoryName) => {
  try {
    const response = await axios.post(
      `${apiUrl}/admin/sub-categories`,
      {
        name: name,
        categoryName: categoryName,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("this is response in set new subcategory ", response.data);

    return response.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
export const setUpdateSubCategory = async (id, name, categoryName) => {
  try {
    const response = await axios.put(
      `${apiUrl}/admin/sub-categories/${id}`,
      {
        name,
        categoryName,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("this is response in set new subcategory ", response.data);

    return response.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
export const setDeleteSubCategory = async (id) => {
  try {
    const response = await axios.delete(
      `${apiUrl}/admin/sub-categories/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data.subcategory;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
///categories crud
export const getAllCategory = async () => {
  try {
    const response = await axios.get(`${apiUrl}/admin/categories`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log("this is response in get all category ", response.data);

    return response.data.category.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
export const setNewCategory = async (name) => {
  try {
    const response = await axios.post(
      `${apiUrl}/admin/categories`,
      {
        name,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("this is response in set new category ", response.d);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const setUpdateCategory = async (id, name) => {
  try {
    const response = await axios.put(
      `${apiUrl}/admin/categories/${id}`,
      {
        name,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("this is response in set new category ", response.data);

    return response.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
export const setDeleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/admin/categories/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("this is response in set new category ", response.data);

    return response.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
///foods crud
export const getAllFood = async () => {
  try {
    const response = await axios.get(`${apiUrl}/admin/foods`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("this is response in get all food ", response.data);

    return response.data.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
export const getSignleFood = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/admin/foods/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(
      "this is response in get one food admin food ",
      response.data.data
    );

    return response.data.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};

export const deleteSignleFood = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/admin/foods/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(
      "this is response in get one food admin food ",
      response.data.data
    );

    return response.data.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
export const setNewFood = async (formData) => {
  try {
    const response = await axios.post(`${apiUrl}/admin/foods`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("this is response in set new food ", response.data);

    return response.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
export const setUpdateFood = async (
  id,
  name,
  price,
  subcategoryName,
  categoryName,
  description,
  availability,
  time,
  image
) => {
  try {
    const response = await axios.put(
      `${apiUrl}/admin/foods/${id}`,
      {
        name,
        price,
        subcategoryName,
        categoryName,
        description,
        availability,
        time,
        image,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("this is response in set new food ", response.data);

    return response.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
export const setDeleteFood = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/admin/foods/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("this is response in set new food ", response.data);

    return response.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
///orders crud
export const getAllOrder = async () => {
  try {
    const response = await axios.get(`${apiUrl}/admin/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("this is response in get all order ", response.data.data);

    return response.data.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};

export const getSingleOrder = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/admin/orders/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("this is response in get all order ", response.data.data);

    return response.data.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
export const setUpdateOrder = async (id, status) => {
  try {
    const response = await axios.put(
      `${apiUrl}/admin/orders/${id}`,
      {
        changeStatus: status,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("this is response in set new order ", response.data);

    return response.data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};
