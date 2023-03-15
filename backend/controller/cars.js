const express = require("express");
const { Pool } = require("pg");
const { v4: uuidv4 } = require("uuid");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cars",
  password: "admin",
  port: 5432,
});

exports.create = (req, res) => {
  pool.query(
    "INSERT INTO cars (make, model, package, color, year, category, mileage, price, id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
    [
      req.body.make,
      req.body.model,
      req.body.package,
      req.body.color,
      req.body.year,
      req.body.category,
      req.body.mileage,
      req.body.price,
      uuidv4(),
    ],
    (error, results) => {
      if (error) {
        console.log("error===>", error);
        throw error;
      }

      res.send(`User added with ID: ${results.insertId}`);
    }
  );
};

exports.get = (req, res) => {
  pool.query("SELECT * FROM cars", (error, results) => {
    if (error) {
      throw error;
    }

    res.send({
      result: results.rows,
    });
  });
};

exports.getById = (req, res) => {
  pool.query("SELECT * FROM cars", (error, results) => {
    if (error) {
      throw error;
    }

    const selectedRow =
      results.rows.find((item) => item.id === req.params.id) || {};

    res.send({
      result: selectedRow,
    });
  });
};
