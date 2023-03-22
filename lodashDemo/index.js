import lodash from "lodash";

const nums = [1,2,1,2,4,3,5,6,3,5,1,2,1,2,4,3,5,6,3,5,9,8,6,5];

let result = lodash.uniq(nums);
console.log(result);

let extended = lodash.concat(nums, [10,11,12]);
console.log(extended);

lodash.fill(nums, '*', 1, 4);
console.log(nums);

