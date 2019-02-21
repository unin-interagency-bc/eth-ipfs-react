"use strict";

const StoreHash = artifacts.require("StoreHash");

module.exports = deployer => {
  deployer.deploy(StoreHash);
};