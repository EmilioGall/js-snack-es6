# JSnack 1 - es6

## Text of the exercise
Crea un array composto da automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

## Solution

### FUNCTIONS



### LOGICAL EXECUTION

- [x] Define *constant* for array of objects. (carsArray)
>
- [x] Define *variable* for empty array of petrol cars. (petrolCarsArray)
>
- [x] Define *variable* for empty array of diesel cars. (dieselCarsArray)
>
- [x] Define *variable* for empty array of other cars. (otherCarsArray)
>
- [x] **FOR EACH** object element of the array (carsArray)

    - [x] Define *constant* for array element attributes. {alimentazione}

    - [x] **IF** (alimentazione === "benzina")
        - [x] Push the element in array (petrolCarsArray)

    - [x] **ELSE IF** (alimentazione === "diesel")
        - [x] Push the element in array (dieselCarsArray)

    - [x] **ELSE**
        - [x] Push the element in array (otherCarsArray)
