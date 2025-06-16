const router = require("express").Router();
const { nanoid } = require("nanoid");
const { products, codecs, users, reviews } = require("./mock");
const { normalizedRestaurants } = require("./normalized-mock");
const { reply, getById, updateById } = require("./utils");

router.get("/restaurants", (req, res, next) => {
  console.log("get normalizedRestaurants");
  reply(res, normalizedRestaurants);
});

router.get("/restaurant/:restaurantId", (req, res, next) => {
  const restaurantId = req.params?.restaurantId;
  console.log(restaurantId);
  let restaurant;

  if (restaurantId) {
    restaurant = getById(normalizedRestaurants)(restaurantId);
  }

  reply(res, restaurant);
});

router.get("/codecs", (req, res, next) => {
  const { productId } = req.query;
  let result = codecs;
  if (productId) {
    const product = getById(products)(productId);
    if (product) {
      result = product.codecs.map(getById(result));
    }
  }
  reply(res, result);
});

router.get("/reviews", (req, res, next) => {
  console.log("get reviews");
  const { productId } = req.query;
  let result = reviews;
  if (productId) {
    const product = getById(products)(productId);
    if (product) {
      result = product.reviews.map(getById(result));
    }
  }
  reply(res, result);
});

router.post("/review/:productId", (req, res, next) => {
  const body = req.body;
  const productId = req.params?.productId;
  const product = productId && getById(products)(productId);
  let newReview = {};

  if (product && body) {
    const newReviewId = nanoid();

    newReview = {
      ...body,
      id: newReviewId,
    };
    product.reviews.push(newReviewId);
    reviews.push(newReview);
  }

  reply(res, newReview);
});

router.patch("/review/:reviewId", (req, res, next) => {
  const body = req.body;
  const reviewId = req.params?.reviewId;
  let updatedReview;

  if (reviewId) {
    updatedReview = updateById(reviews)(reviewId, body);
  }

  reply(res, updatedReview);
});

router.get("/users", (req, res, next) => {
  console.log("get users");
  reply(res, users);
});

module.exports = router;
