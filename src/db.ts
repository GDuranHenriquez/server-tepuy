import { DataSource } from "typeorm";
import dotenv from 'dotenv'; 
import { Token } from "./entities/EToken";
import { User } from "./entities/EUser";
dotenv.config(); 

const { DB_DATABASE, DB_PORT, DB_HOST, DB_USER_NAME, DB_PASSWORD } = process.env

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT ? parseInt(DB_PORT) : 5432,
  username: DB_USER_NAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Token, User],
  subscribers: [],
  migrations: []
})