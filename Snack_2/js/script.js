// Define *constant* for array of objects.
clubsLithuanianDivision = [
    {
    clubName: "FK Vilnius",
    clubPoints: 0,
    clubFouls: 0,
},
    {
    clubName: "Kauno FA",
    clubPoints: 0,
    clubFouls: 0,
},
    {
    clubName: "FC Klaipėda",
    clubPoints: 0,
    clubFouls: 0,
},
    {
    clubName: "Šiauliai FC",
    clubPoints: 0,
    clubFouls: 0,
},
    {
    clubName: "FK Panevėžys",
    clubPoints: 0,
    clubFouls: 0,
},
    {
    clubName: "Alytus United",
    clubPoints: 0,
    clubFouls: 0,
},
    {
    clubName: "Marijampolės FK",
    clubPoints: 0,
    clubFouls: 0,
},
    {
    clubName: "Utenos FC",
    clubPoints: 0,
    clubFouls: 0,
},
    {
    clubName: "Tauragės FA",
    clubPoints: 0,
    clubFouls: 0,
},
    {
    clubName: "Telšių FK",
    clubPoints: 0,
    clubFouls: 0,
},
];

// Define *variable* for new array.
let clubsLithuanianDivisionShort = [ ];

console.log("clubsLithuanianDivisionShort", clubsLithuanianDivisionShort);

clubsLithuanianDivision.forEach((element) => {
    
    // Define *variable* for array element attributes.
    let {clubPoints, clubFouls} = element;

    // console.log("clubPoints", clubPoints);

    // console.log("clubFouls", clubFouls);


    element.clubPoints = getRandomIntInclusive(0, 50);

    element.clubFouls = getRandomIntInclusive(0, 15);

    console.log("clubFouls", clubFouls);

});

console.log("clubsLithuanianDivision", clubsLithuanianDivision);

clubsLithuanianDivision.forEach((element) => {

    let {clubName, clubFouls} = element;

    console.log("clubFouls", clubFouls);

    clubsLithuanianDivisionShort.push(element = {clubName, clubFouls})

});

console.log("clubsLithuanianDivisionShort", clubsLithuanianDivisionShort);
