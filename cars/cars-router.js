const express = require("express");
const db = require("../data/db-config");

const router = express.Router();

router.get("/", async (req, res) => {
  const cars = await db("cars");

  try {
    res.status(200).json(cars);
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
    res.status(201).json({ message: "added car.", newCar });
  } catch ({ err }) {
    res.status(500).json({ err, message: "Could not add car." });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const count = await db("cars")
      .where({ id })
      .update(changes);

    if (count) {
      res.json({ update: count });
    } else {
      res.status(404).json({ message: "Could not find car with given id." });
    }
  } catch ({ err }) {
    res.status(500).json({ err, message: "Could not update car." });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const count = await db("cars")
      .where({ id })
      .del();

    if (count) {
      res.json({ removed: count });
    } else {
      res.status(404).json({ message: "Could not find car with given id." });
    }
  } catch ({ err }) {
    res.status(500).json({ err, message: "Failed to delete car." });
  }
});

module.exports = router;
