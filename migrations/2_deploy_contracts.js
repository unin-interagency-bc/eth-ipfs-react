"use strict";
// const StoreHash = artifacts.require("StoreHash");
const StoreHashes = artifacts.require("StoreHashes");

module.exports = deployer => {
  // deployer.deploy(StoreHash);
  deployer.deploy(StoreHashes);
};