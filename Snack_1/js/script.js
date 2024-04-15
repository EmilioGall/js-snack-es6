// Define *constant* for array of objects {bikes features}.
arrayBikesFeatures = [
    {
        model: "Trek FX 1",
        weight: 11,
    },
    {
        model: "Specialized irrus  3.0",
        weight: 12.5,
    },
    {
        model: "Giant Escap 3",
        weight: 12,
    },
    {
        model: "Cannondale ick 4",
        weight: 10.5,
    },
    {
        model: "Scott Sub C ss 40",
        weight: 13.5,
    },
    {
        model: "Fuji Absolu 1.9",
        weight: 11.8,
    },
    {
        model: "Diamondbackrace 2",
        weight: 11.2,
    },
    {
        model: "Raleigh Cadt 2",
        weight: 12.3,
    },
    {
        model: "GT Transeo 0",
        weight: 11.5,
    },
    {
        model: "Marin Fairf 1",
        weight: 10.7,
    },
];

// Define *variable* for model of lighter bike.
let lighterBikeModel = "";

console.log("lighterBikeModel", lighterBikeModel);

// Define *variable* for weight of lighter bike.
let lighterBikeWeight = 0;

console.log("lighterBikeWeight", lighterBikeWeight);

arrayBikesFeatures.forEach((element) => { 

    // Define *constant* for array element attributes.
    const {weight, model} = element;

    console.log("current weight", weight);

    if ((lighterBikeWeight === 0) || (lighterBikeWeight > weight)) {

        lighterBikeWeight = weight;

        lighterBikeModel = model;

    };

    console.log("lighterBikeWeight", lighterBikeWeight);

    console.log("lighterBikeModel", lighterBikeModel);

});

document.querySelector("body")
.innerHTML =
`
    <p>
        The lighter bike is: ${lighterBikeModel}
    </p>
`;