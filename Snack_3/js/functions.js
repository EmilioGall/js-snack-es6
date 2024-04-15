/**
 * Description: function return a random integer between min and max.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomIntInclusive(min, max) {

  const minCeiled = Math.ceil(min);

  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

};

/**
 * Description: function return an array of numbers included between lowerLimit and higherLimit.
 * @param {array} givenArray
 * @param {number} lowerLimit
 * @param {number} higherLimit
 * @returns {array}
 */
function numbersBetween(givenArray, lowerLimit, higherLimit) {

  let flagArray = [ ];

  givenArray.forEach(element => {
    
    if ((element > lowerLimit) && (element < higherLimit)) {

      flagArray.push(element);

    };

  });

  return flagArray;

};
  