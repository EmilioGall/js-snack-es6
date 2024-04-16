// Define *constant* for array of objects {people features}.
peopleArray = [
    {
        personName: "Name1",
        personSurname: "Surname1",
        personAge: 28,
    },
    {
        personName: "Name2",
        personSurname: "Surname2",
        personAge: 15,
    },
    {
        personName: "Name3",
        personSurname: "Surname3",
        personAge: 32,
    },
    {
        personName: "Name4",
        personSurname: "Surname4",
        personAge: 23,
    },
    {
        personName: "Name5",
        personSurname: "Surname5",
        personAge: 12,
    },
];

const newArray = peopleArray.map((e) => {

    if (e.personAge > 18) {
        return `${e.personName} ${e.personSurname} is allowed to drive`;
    } else {
        return `${e.personName} ${e.personSurname} is NOT allowed to drive`;
    };
});

console.log("newArray", newArray);