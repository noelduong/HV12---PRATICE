/*let fruits = ["Orange", "Apple", "Banana", "Grapes"];
/**console.log(fruits[0])*/
/**console.log(fruits.length)*/
/**console.log(fruits[fruits.length -1])*/

/**const carts = [
  "Milk",
  "Shirt",
  "Pant",
  "Hat",
  "Shoes",
  "Socks",
  "Watch",
  "Bag",
  "Belt",
  "Glasses",
];
console.log(` Total items in cart:${carts.length}`);
console.log(`Last item in cart: ${carts[carts.length - 1]}`);
console.log(` First item in cart: ${carts[0]}`);

carts.push("Phone");
console.log(`Last item in cart: ${carts[carts.length - 1]}`);
carts.pop();
console.log(carts);

carts.unshift("Laptop")
console.log(`First item in cart: ${carts[0]}`);
carts.shift();
console.log(carts);

carts.splice(2,1, "Phone");
console.log(carts);*/

/**let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
/**let box = matrix[1][2]*/
/**console.log(matrix[2][2]);*/

/**const friends = ["An", "Jena", "Dương"];
friends.push("Hùng");
console.log(`Total number of friends ${friends.length}`);
console.log(`First friend: ${friends[0]}`);
friends.unshift("Mai");
friends.pop();
friends.splice(2, 1, "Trang");
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}*/
/**Bài 1*/
const countValidCases = (memoryUsages, limit) => {
  let count = 0;
  for (let i = 0; i < memoryUsages.length; i++) {
    if (memoryUsages[i] <= limit) {
      count++;
    }
  }
  return count;
};

console.log(countValidCases([32, 45, 28, 50, 64, 20], 40));

const findMaxSpike = (excutionsTimes) => {
  let maxSpike = 0;
  for (let i = 1; i < excutionsTimes.length; i++) {
    const diff = excutionsTimes[i] - excutionsTimes[i - 1];
    if (diff > maxSpike) {
      maxSpike = diff;
    }
  }
  return maxSpike;
};
console.log(findMaxSpike([15, 30, 18, 40, 25, 50]));
console.log(findMaxSpike([50, 40, 30, 30, 20]));
