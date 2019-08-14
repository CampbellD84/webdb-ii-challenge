exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "WP22334568TV98761",
          make: "Volkswagen",
          model: "Beetle",
          mileage: 123001
        },
        {
          VIN: "XD56791324MD78553",
          make: "Land Rover",
          model: "Range Rover Discovery",
          mileage: 90500
        },
        {
          VIN: "JP78965431SB95043",
          make: "Subaru",
          model: "WRX Sedan",
          mileage: 102567
        }
      ]);
    });
};
