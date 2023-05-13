import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allFoods: [],
  status: "idle",
  error: null,
  singleFood: {
    feedbacks: [],
  },
};
export const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    //creating a slicer to retrieve one food from the list of foods
    setFood: (state, payload) => {
      state.allFoods = payload.payload;
    },
    setSingleFood: (state, payload) => {
      state.singleFood = payload.payload;
    },

    toggleToCart: (state, payload) => {
      if (!state.allFoods[payload.payload.id].isItInCart) {
        state.allFoods[payload.payload.id].isItInCart = true;
      } else {
        state.allFoods[payload.payload.id].isItInCart = false;
      }
      localStorage.setItem("allFoods", JSON.stringify(state.allFoods));
    },
    changeCartQuantity: (state, payload) => {
      state.allFoods[payload.payload.index].cartQuantity =
        payload.payload.quantity;
      localStorage.setItem("allFoods", JSON.stringify(state.allFoods));
    },
    addFood: (state, payload) => {
      state.allFoods.push(payload.payload);
      localStorage.setItem("allFoods", JSON.stringify(state.allFoods));
    },
    toggleDeleteFood: (state, payload) => {
      const index = state.allFoods.findIndex((food) => {
        return food.id === payload.payload.id;
      });
      state.allFoods[index].deleted = !state.allFoods[index].deleted;
      localStorage.setItem("allFoods", JSON.stringify(state.allFoods));
    },
    editFood: (state, payload) => {
      const index = state.allFoods.findIndex((food) => {
        return food.id === payload.payload.id;
      });
      state.allFoods[index] = payload.payload;
      localStorage.setItem("allFoods", JSON.stringify(state.allFoods));
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(getFoods.pending, (state, action) => {
  //     state.status = "loading";
  //   });
  //   builder.addCase(getFoods.fulfilled, (state, action) => {
  //     state.status = "succeeded";
  //     state.allFoods = action.payload;
  //   });

  //   builder.addCase(getFoods.rejected, (state, action) => {
  //     state.status = "failed";
  //     state.error = action.error.message;
  //   });
});

export default foodsSlice.reducer;

export const selectAllFoods = (state) => state.foods.allFoods;
export const selectSingleFood = (state) => state.foods.singleFood;
export const selectFoodStatus = (state) => state.foods.status;
export const selectFoodError = (state) => state.foods.error;
export const {
  toggleToCart,
  changeCartQuantity,
  addFood,
  toggleDeleteFood,
  editFood,
  getFood,
  setFood,
  setSingleFood,
} = foodsSlice.actions;

// {
//   id: 30,
//   sub_category_id: 35,
//   name: "chicken burger",
//   price: 8,
//   description:
//     "Non omnis saepe reiciendis atque excepturi illo. Ea facere qui ratione. Sed ipsa rem qui ut.",
//   flag_of_disable: 1,
//   time: 15,
//   created_at: "2023-04-22 13:38:17",
//   updated_at: "2023-04-22 13:38:17",
//   feedbacks_count: 2,
//   feedbacks_avg_rating: "4.3",
//   feedbacks: [
//     {
//       id: 6,
//       user_id: 6,
//       food_id: 30,
//       username: "hana",
//       rating: "4.0",
//       description: "its worth trying",
//       created_at: "2023-04-22 13:39:10",
//       updated_at: "2023-04-22 13:39:10",
//     },
//     {
//       id: 7,
//       user_id: 6,
//       food_id: 30,
//       username: "hana",
//       rating: "4.6",
//       description: "its worth trying",
//       created_at: "2023-04-22 15:44:59",
//       updated_at: "2023-04-22 15:44:59",
//     },
//   ],
// },
// {
//   id: 1,
//   sub_category_id: 35,
//   name: "briany ",
//   price: 5,
//   description:
//     "Non omnis saepe reiciendis atque excepturi illo. Ea facere qui ratione. Sed ipsa rem qui ut.",
//   flag_of_disable: 1,
//   time: 15,
//   created_at: "2023-04-22 13:38:17",
//   updated_at: "2023-04-22 13:38:17",
//   feedbacks_count: 2,
//   feedbacks_avg_rating: "4.3",
//   feedbacks: [
//     {
//       id: 6,
//       user_id: 6,
//       food_id: 30,
//       username: "hana",
//       rating: "4.0",
//       description: "its worth trying",
//       created_at: "2023-04-22 13:39:10",
//       updated_at: "2023-04-22 13:39:10",
//     },
//     {
//       id: 7,
//       user_id: 6,
//       food_id: 30,
//       username: "hana",
//       rating: "4.6",
//       description: "its worth trying",
//       created_at: "2023-04-22 15:44:59",
//       updated_at: "2023-04-22 15:44:59",
//     },
//   ],
// },
// {
//   id: 2,
//   sub_category_id: 35,
//   name: "dolma",
//   price: 9,
//   description:
//     "Non omnis saepe reiciendis atque excepturi illo. Ea facere qui ratione. Sed ipsa rem qui ut.",
//   flag_of_disable: 1,
//   time: 15,
//   created_at: "2023-04-22 13:38:17",
//   updated_at: "2023-04-22 13:38:17",
//   feedbacks_count: 2,
//   feedbacks_avg_rating: "4.3",
//   feedbacks: [
//     {
//       id: 6,
//       user_id: 6,
//       food_id: 30,
//       username: "hana",
//       rating: "4.0",
//       description: "its worth trying",
//       created_at: "2023-04-22 13:39:10",
//       updated_at: "2023-04-22 13:39:10",
//     },
//     {
//       id: 7,
//       user_id: 6,
//       food_id: 30,
//       username: "hana",
//       rating: "4.6",
//       description: "its worth trying",
//       created_at: "2023-04-22 15:44:59",
//       updated_at: "2023-04-22 15:44:59",
//     },
//   ],
// },
// {
//   id: 3,
//   sub_category_id: 35,
//   name: "pitza",
//   price: 8,
//   description:
//     "Non omnis saepe reiciendis atque excepturi illo. Ea facere qui ratione. Sed ipsa rem qui ut. lorem lorem",
//   flag_of_disable: 1,
//   time: 15,
//   created_at: "2023-04-22 13:38:17",
//   updated_at: "2023-04-22 13:38:17",
//   feedbacks_count: 2,
//   feedbacks_avg_rating: "4.3",
//   feedbacks: [
//     {
//       id: 6,
//       user_id: 6,
//       food_id: 30,
//       username: "hana",
//       rating: "4.0",
//       description: "its worth trying",
//       created_at: "2023-04-22 13:39:10",
//       updated_at: "2023-04-22 13:39:10",
//     },
//     {
//       id: 7,
//       user_id: 6,
//       food_id: 30,
//       username: "hana",
//       rating: "4.6",
//       description: "its worth trying",
//       created_at: "2023-04-22 15:44:59",
//       updated_at: "2023-04-22 15:44:59",
//     },
//   ],
// },
