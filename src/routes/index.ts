import express from "express";
import habits from "./habit.js";

const router = express.Router();

export default (): express.Router => {
  router.use(habits);
  return router;
};
