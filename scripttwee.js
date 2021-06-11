const getal = function (number1) {
    const sum = number1;
    if (sum > 100) {
        return "De club is vol, wij verwelkomen je graag op een later moment.";
    }
    else if (sum < 100) {
        return "Kom binnen!"
    }
};

const result = getal(150);
console.log(result);

const leeftijd = function (number2) {
    const sum = number2;
    if (sum < 18) {
        return "Deze club is alleen voor volwassenen."
    }
    else if (sum > 18) {
        return "Kom binnen!"
    }
};

const result = leeftijd(19);
console.log(result);
