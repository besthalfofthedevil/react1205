const router = require("express").Router();
const { nanoid } = require("nanoid");
const { normalizedRestaurants, normalizedDishes, normalizedReviews, normalizedUsers } = require("./mock");
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

router.get("/reviews", (req, res, next) => {
  const { restaurantId } = req.query;
  console.log("get reviews", restaurantId);
  let result = normalizedReviews;
  if (restaurantId) {
    const reviews = getById(normalizedReviews)(restaurantId);
    if (reviews) {
      result = product.reviews.map(getById(result));
    }
  }
  reply(res, result);
});

router.get("/users", (req, res, next) => {
  console.log("get users");
  reply(res, normalizedUsers);
});


router.post("/review/:restaurantId", (req, res, next) => {
  console.log("Add review");
  const body = req.body;
  const restaurantId = req.params?.restaurantId;
  const restaurant = restaurantId && getById(normalizedRestaurants)(restaurantId);
  let newReview = {};

  if (restaurant && body) {
    const newReviewId = nanoid();

    newReview = {
      ...body,
      id: newReviewId,
    };
    restaurant.reviews.push(newReviewId);
    normalizedReviews.push(newReview);
  }

  reply(res, newReview);
});

router.patch("/review/:reviewId", (req, res, next) => {
  console.log("Update review");
  const body = req.body;
  const reviewId = req.params?.reviewId;
  console.log("Update review", reviewId);
  let updatedReview;

  if (reviewId) {
    updatedReview = updateById(normalizedReviews)(reviewId, body);
  }

  reply(res, updatedReview);
});



module.exports = router;
