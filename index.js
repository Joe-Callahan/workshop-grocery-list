const groceryList = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

//Takes in array and logs each item name.
const logNames = (array) => {
  array.forEach((array) => {
    console.log(array.name)}
  )};

// logNames(groceryList);

//Takes in array and returns array of item names in all uppercase.
const getUpperCaseNames = (array) => {
  const newArray = array.map((item) => {
    return item.name.toUpperCase();
  });
  console.log(newArray);
}

// getUpperCaseNames(groceryList);

//Takes in an array of items and an id. Returns the item in the array with the given id.

const getItemById = (array, itemId) => {
  const foundItem = array.find((item) => {
    return item.id === itemId;
  });
  console.log(foundItem);
}

// getItemById(groceryList, 7);

//Takes in an array of items and a name string. Returns the price of the item that matches the name that was passed in.
const getItemPriceByName = (array, nameString) => {
  for(let i = 0; i < array.length; i++) {
    const itemSearch = array[i].name;
    if (itemSearch === nameString) {
      return console.log(`${itemSearch}: ${array[i].price}`);
    }
  } 
  console.log(`Out of stock. Please enter a valid grocery item.`);
}

// getItemPriceByName(groceryList, `cheddar`);

//Takes in an array of items and a category string. Returns an array of items that belong to the given category.
const getItemsByCategory = (array, categoryString) => {
  const categoryFilter = array.filter((item) => {
    return item.category === categoryString;
  });
  console.log(categoryFilter);
}

// getItemsByCategory(groceryList, `dairy`);

//Takes in an array of items and returns the total quantity of all items.
const countItems = (array) => {
  totalQuantity = array.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  },0);
  console.log(totalQuantity);
}

// countItems(groceryList);

//Takes in an array of items and returns the cost of all given items.
const calculateTotalPrice = (array) => {
  totalPrice = array.reduce((accumulator, item) => {
    return accumulator + (item.price * item.quantity);
  },0);
  console.log(totalPrice);
}

// calculateTotalPrice(groceryList);