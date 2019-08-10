
exports.up = function (knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments("id");
        tbl.text("VIN", 17).unique().notNullable();
        tbl.text("Make", 128).notNullable();
        tbl.text("Model", 128).notNullable();
        tbl.integer("Mileage").notNullable();
        tbl.text("Transmission", 128);
        tbl.text("Title", 128);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cars");
};
