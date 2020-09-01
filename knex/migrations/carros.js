exports.up = function(knex, Promise) {
    return knex.schema.createTable('carros', function(table) {
      table.increments();
      table.string('veiculo').notNullable();
      table.string('marca').notNullable();
      table.integer('ano').notNullable();
      table.text('descricao').notNullable();
      table.boolean('vendido').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('carros');
  }