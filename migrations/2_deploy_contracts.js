"use strict";
// const StoreHash = artifacts.require("StoreHash");
const StoreHashes = artifacts.require("StoreHashes");

console.log('Entering the second migration')

module.exports = deployer => {
  deployer.deploy(StoreHashes);
};