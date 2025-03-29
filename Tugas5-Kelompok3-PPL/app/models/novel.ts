import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Novel extends BaseModel {
  @column({ isPrimary: true })
  public id!: number
  
  @column()
  public title!: string

  @column()
  public year!: number

  @column()
  public author!: string

  @column()
  public genre!: string

  @column()
  public pages!: number

  @column()
  public rating!: number

  @column()
  public summary!: string
}
