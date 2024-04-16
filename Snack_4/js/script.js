// Define *constant* for array of objects {cars arrays}.
const carsArray = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
];

console.log("carsArray", carsArray);

// Define *variable* for empty array of petrol cars.
let petrolCarsArray = [];

console.log("petrolCarsArray", petrolCarsArray);

// Define *variable* for empty array of diesel cars.
let dieselCarsArray = [];

console.log("dieselCarsArray", dieselCarsArray);

// Define *variable* for empty array of other cars.
let otherCarsArray = [];

console.log("otherCarsArray", otherCarsArray);

carsArray.forEach((curCar) => { 

    // Define *constant* for array element attribute.
    const {alimentazione} = curCar;

    if (alimentazione === "benzina") {

        petrolCarsArray.push(curCar);

    } else if (alimentazione === "diesel") {

        dieselCarsArray.push(curCar);

    } else {

        otherCarsArray.push(curCar);

    };

});

console.log("petrolCarsArray", petrolCarsArray);

console.log("dieselCarsArray", dieselCarsArray);

console.log("otherCarsArray", otherCarsArray);