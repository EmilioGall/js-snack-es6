// Define *constant* for array of numbers.
const numArray =[ ];

for (i=0; i<10; i++) {

    numArray.push(getRandomIntInclusive(0, 100));

};

console.log("numArray", numArray);

const numArraySelected = numbersBetween(numArray, 10, 40);

console.log("numArraySelected", numArraySelected);