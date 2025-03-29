import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Novels extends BaseSchema {
  protected tableName = 'novels'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('title').notNullable()
      table.integer('year').notNullable()
      table.string('author').notNullable()
      table.string('genre').notNullable()
      table.integer('pages').notNullable()
      table.float('rating').notNullable()
      table.text('summary').notNullable()
    })

    this.schema.alterTable(this.tableName, (table) => {
      table.increments('id').primary()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
