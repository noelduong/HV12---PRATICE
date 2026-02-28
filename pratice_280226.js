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


const friends = [ "An", "Jena", "Dương"]
friends.push("Hùng")
console.log(`Total number of friends ${friends.length}`);
console.log(`First friend: ${friends[0]}`);
friends.unshift("Mai")
friends.pop()
friends.splice(1, 1, "Trang")
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

