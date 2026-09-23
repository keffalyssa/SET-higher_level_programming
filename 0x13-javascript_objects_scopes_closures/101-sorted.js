#!/usr/bin/node
const initialDict = require('./101-data').dict;
const newDict = {};

for (const [userId, occurrence] of Object.entries(initialDict)) {
  if (!newDict[occurrence]) {
    newDict[occurrence] = [];
  }
  newDict[occurrence].push(userId);
}

console.log(newDict);
