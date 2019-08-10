const express = require("express");
const db = require("../data/db-config");

const router = express.Router();

router.get("/", async (req, res) => {
  const cars = await db("cars");

  try {
    res.json(cars);
  } catch ({ err }) {
    res.status(500).json({ err, message: "Could not retrieve cars." });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const car = await db("cars").where({ id });

  try {
    res.json(car);
  } catch ({ err }) {
    res
      .status(500)
      .json({ err, message: `Car with id of ${id} could not be found. ` });
  }
});

router.post("/", async (req, res) => {
  const carData = req.body;
  const [id] = await db("cars").insert(carData);
  const newCar = await db("cars").where({ id });

  try {
    res.status(201).json({ message: "added car." });
  } catch ({ err }) {
    res.status(500).json({ err, message: "Could not add car." });
  }
});

module.exports = router;
