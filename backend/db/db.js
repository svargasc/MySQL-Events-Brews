// import mysql from 'mysql';
import { createPool } from "mysql2/promise";

export const pool = createPool(
  {
    host: "localhost",
    user: "root",
    password: "Apto1404",
    database: "eventsBrews",
  },
  console.log("Connected to database")
);
