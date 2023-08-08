function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

var pizza1 = pizzaOven(
  "deep-dish",
  "traditonal",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
console.log(pizza1);

var pizza2 = pizzaOven(
  "hand-tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
console.log(pizza2);

var pizza3 = pizzaOven(
  "thin",
  "white-sauce",
  ["mozzarella", "provolone"],
  ["nduja sausage", "olives", "red peppers"]
);
console.log(pizza3);

var pizza4 = pizzaOven(
  "stuffed-crust",
  "pesto",
  ["buffalo mozzarella", "ricotta"],
  ["sausage", "bitter-rapini"]
);
console.log(pizza4);

function randomPizza() {
  var randomPizza = {};
  var crustType = [
    "deep-dish",
    "hand-tossed",
    "thin",
    "stuffed-crust",
    "garlic",
    "gluten-free",
    "cauliflower",
  ];
  var sauceType = ["traditional", "marinara", "white-sauce", "pesto"];
  var cheeses = [
    "mozzarella",
    "feta",
    "provolone",
    "buffalo mozzarella",
    "ricotta",
    "goat cheese",
    "gorgonzola",
    "pecorino",
    "parmigiano-reggiano",
  ];
  var toppings = [
    "pepperoni",
    "sausage",
    "mushrooms",
    "olives",
    "onions",
    "nduja sausage",
    "red peppers",
    "bitter-rapini",
    "eggplant",
    "onions",
    "pineapple",
    "prosciutto",
    "bacon",
    "chicken",
    "artichokes",
  ];

  randomPizza.crustType =
    crustType[Math.floor(Math.random() * crustType.length)];
  randomPizza.sauceType =
    sauceType[Math.floor(Math.random() * sauceType.length)];
  randomPizza.cheeses = cheeses[Math.floor(Math.random() * cheeses.length)];
  randomPizza.toppings = toppings[Math.floor(Math.random() * toppings.length)];
  randomPizza.toppings2 = toppings[Math.floor(Math.random() * toppings.length)];
  randomPizza.toppings3 = toppings[Math.floor(Math.random() * toppings.length)];
  randomPizza.toppings4 = toppings[Math.floor(Math.random() * toppings.length)];
  randomPizza.toppings5 = toppings[Math.floor(Math.random() * toppings.length)];
  return randomPizza;
}

console.log(randomPizza());
