/* 3.uzdevums
a) Izveidojiet failu `coffee-order.js`.
b) Izveidojiet mainīgo `coffeeSize` ar vērtību `large` un mainīgo `addSugar` ar patiesu Boolean vērtību.
c) Izmantojot nosacījumus (if..else) izdrukājiet konsolē pirkuma cenu:
- `small` izmērs maksā 1 EUR, `meduim` - 1.5, bet `large` - 2 EUR.
- cukura piedeva maksā 0.20 EUR. */
let small = 1;
let medium = 1.5;
let large = 2;

let coffeeSize = "large"
let addSugar = true



if (coffeeSize == "small") {
    console.log("kafija maksa " + small + " eur")
}
else if (coffeeSize == "medium") {
    console.log("kafija maksa " + medium + " eur")
}
else{
    console.log("kafiaj maksa " + large + " eur")
}

