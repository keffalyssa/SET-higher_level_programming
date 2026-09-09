#!/usr/bin/node

const args = process.argv.slice(2);

if (args.length <= 1) {
  console.log(0);
} else {
  const nums = args.map(Number);
  const uniqueNums = [...new Set(nums)].sort((a, b) => b - a);

  if (uniqueNums.length < 2) {
    console.log(0);
  } else {
    console.log(uniqueNums[1]);
  }
}
