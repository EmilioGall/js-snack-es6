# JSnack 3 - es6

## Text of the exercise
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

## Solution

### FUNCTIONS

### LOGICAL EXECUTION

- [x] Define *constant* for array of objects. (arrayBikesFeatures)
>
- [x] Define *variable* for model of lighter bike. (lighterBikeModel)
>
- [x] Define *variable* for weight of lighter bike. (lighterBikeWeight)
>
- [x] **FOR EACH** object element of the array (arrayBikesFeatures)

    - [x] Define *constant* for array element attributes. {weight, model}

    - [x] **IF** (lighterBikeWeight === 0) *OR* (lighterBikeWeight > weight)

        - [x] Set (lighterBikeWeight = weight).

        - [x] Set (lighterBikeModel = model).

### OUTPUT

- [x] Print in the body DOM element the lighter model.