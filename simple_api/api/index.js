const router = require("express").Router();
const { nanoid } = require("nanoid");
// const { products, codecs, users, reviews } = require("./mock");
const { normalizedRestaurants, normalizedDishes } = require("./normalized-mock");
const { reply, getById, updateById } = require("./utils");

router.get("/restaurants", (req, res, next) => {
  console.log("get restaurants");
  reply(res, normalizedRestaurants);
});

router.get("/restaurant/:restaurantId", (req, res, next) => {
  const restaurantId = req.params?.restaurantId;
  console.log("get restaurant", restaurantId);
  let restaurant;

  if (restaurantId) {
    restaurant = getById(normalizedRestaurants)(restaurantId);
  }

  reply(res, restaurant);
});

router.get("/dish/:dishId", (req, res, next) => {
  const dishId = req.params?.dishId;
  console.log("get dish", dishId);
  let dish;

  if (dishId) {
    dish = getById(normalizedDishes)(dishId);
  }

  reply(res, dish);
});

router.get("/dishes", (req, res, next) => {
  const { restaurantId } = req.query;
  console.log("get dishes", restaurantId);
  let result = normalizedDishes
  if (restaurantId) {
    const restaurant = getById(normalizedRestaurants)(restaurantId);
    if (restaurant) {
      result = restaurant.menu.map(getById(result));;
    }
  }
  reply(res, result);
});

// router.get("/reviews", (req, res, next) => {
//   console.log("get reviews");
//   const { productId } = req.query;
//   let result = reviews;
//   if (productId) {
//     const product = getById(products)(productId);
//     if (product) {
//       result = product.reviews.map(getById(result));
//     }
//   }
//   reply(res, result);
// });

// router.post("/review/:productId", (req, res, next) => {
//   const body = req.body;
//   const productId = req.params?.productId;
//   const product = productId && getById(products)(productId);
//   let newReview = {};

//   if (product && body) {
//     const newReviewId = nanoid();

//     newReview = {
//       ...body,
//       id: newReviewId,
//     };
//     product.reviews.push(newReviewId);
//     reviews.push(newReview);
//   }

//   reply(res, newReview);
// });

// router.patch("/review/:reviewId", (req, res, next) => {
//   const body = req.body;
//   const reviewId = req.params?.reviewId;
//   let updatedReview;

//   if (reviewId) {
//     updatedReview = updateById(reviews)(reviewId, body);
//   }

//   reply(res, updatedReview);
// });

// router.get("/users", (req, res, next) => {
//   console.log("get users");
//   reply(res, users);
// });

module.exports = router;
