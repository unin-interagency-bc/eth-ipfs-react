"use strict";

console.log('Entering the first migration')

const Migrations = artifacts.require("Migrations");

module.exports = deployer => {
  deployer.deploy(Migrations);
};