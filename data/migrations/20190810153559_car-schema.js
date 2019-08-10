exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments("id");
    tbl
      .varchar("VIN")
      .unique()
      .notNullable();
    tbl.varchar("make").notNullable();
    tbl.varchar("model").notNullable();
    tbl.integer("mileage").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
