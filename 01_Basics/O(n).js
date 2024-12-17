// O(n) is a way to describe the performance of an algorithm where the time or space it takes grows linearly with the size of the input (n)

const fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange'];

// Algorithm for finding a fruit
const findFruit = (allFruits, fruitName) => {
    for (let i = 0; i < allFruits.length; i++) {
        if (allFruits[i] === fruitName) {
            console.log(`Found ${fruitName} at index ${i}.`);
        }
    }
};

findFruit(fruits, 'Mango');

// Dropping the constants

const cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];

// Algorithm for finding a city
const findCity = (allCities, cityName) => {
    for (let i = 0; i < allCities.length; i++) {
        if (allCities[i] === cityName) {
            console.log(`Found ${cityName} at index ${i}.`);
        }
    }
    console.log(`${cityName} not found.`);

    for (let j = 0; j < allCities.length; j++) {
        if (allCities[j] === cityName) {
            console.log(`Found ${cityName} at index ${j}.`);
        }
    }
    console.log(`${cityName} not found.`);

    // here two loops so n + n = 2n --> 0(2n)
    // but drop the constatnts so it becomes 0(2n) --> o(n)
};

// Test the function
findCity(cities, 'Tokyo');   // Example: Tokyo
findCity(cities, 'Berlin');  // Example: Not in the list
