'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex=0, mainIndex=0, time, address}) {
    console.log(`Order receive!\nThe customer use ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}.\nIt will be delivered to ${address} at ${time}.`);
  }
};

console.log('Hello my name is Ngoc Vo :)) Now we start coding.');

/**
 * Destructuring Array
 * 
 
const arr = [1, 2, 3];

// destruct array
const [a, , b, c] = arr;
console.log(a, b, c, );
console.log('Start Array: ' + arr);

// switch 2 variable use destruct
let [secondary, , main] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starterFood, mainFood] = restaurant.order(2, 0);
console.log('Start use: ' + starterFood + ', then use: ' + mainFood);

// Nested array
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
const [x, , [y, z]] = nested;
console.log(x, y, z);

// Default value
const [k=-1, l=-1, m=-1] = [8, 9];
console.log(k, l, m);

*/

// Destructuring Object
const {name, mainMenu, openingHours} = restaurant;
console.log(name, mainMenu, openingHours);

// set difference name
const { name: nameRes, location: locationRes, categories: categoriesRes} = restaurant;
console.log(nameRes, locationRes, categoriesRes);

// Default value
const { menu = [], starterMenu: starters = ''} = restaurant;
console.log(menu, starters);

// Mutating variables
let [a, b] = [11, 99];
console.log(a, b);
const obj = {a: 23, b:7, c:14};
({a, b} = obj);
console.log(a, b);

// Nested object
const {fri: {open: o, close: c}} = openingHours;
console.log('Open: ' + o);
console.log('Close: ' + c);

// pass object to function
restaurant.orderDelivery({
  time: '19:30',
  address: 'so 42, Mai Xuan Thuong, Quy Nhon',
  starterIndex: 1,
  mainIndex: 2
});

restaurant.orderDelivery({
  time: '18:30',
  address: 'so 48, Mai Xuan Thuong, Quy Nhon'
});