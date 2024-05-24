import app from "./src"
import * as dotenv from 'dotenv'
import "reflect-metadata"
import { AppDataSource } from "./src/db"

//import createAllCountries from "./src/utils/saveCities"
dotenv.config() 

//const DB_STRING_CONECTION = process.env.DB_STRING_CONECTION
const PORT = process.env.PORT || 3000
/* app.get('/', (_req, res) => {
  res.send("Welcome to api of BTV")
}) */

async function startServer() {
  try {
    await AppDataSource.initialize()
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

startServer();