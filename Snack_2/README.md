# JSnack 1 - es6

## Text of the exercise
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

## Solution

### FUNCTIONS

### LOGICAL EXECUTION

- [x] Define *constant* for array of objects. (clubsLithuanianDivision)
>
- [x] Define *variable* for new array. (clubsLithuanianDivisionShort)
>
- [x] **FOR EACH** object element of the array (clubsLithuanianDivision)

    - [x] Define *variable* for array element attributes. {clubPoints, clubFouls}

    - [x] Push a random integer between 0 and 50 in element attribute {clubPoints}.

    - [x] Push a random integer between 0 and 15 in element attribute {clubFouls}.
>
- [x] **FOR EACH** object element of the array (clubsLithuanianDivision)

    - [x] Define *variable* for array element attributes. {clubName, clubFouls}

    - [x] Push array element attributes {clubName, clubFouls} in new array. (clubsLithuanianDivisionShort)