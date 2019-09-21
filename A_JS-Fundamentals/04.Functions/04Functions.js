// 01. Triangle of star
function stars(n) {
    for (let i = 1; i <= n; i++) {
        drawStars(i);
    }
    for (let j = n - 1; j > 0; j--) {
        drawStars(j);
    }

    function drawStars(a) {
        console.log('*'.repeat(a));
    }
}
stars(5);

// 02. Square of stars
function squareStars(n = 5) {
    for(let i = 0; i < n; i++) {
        console.log('*' + ' *'.repeat(n - 1));
    }
}
squareStars();

// 03. Palindrome
function palindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
        return true;
    }
}
console.log(palindrome("racecar"));

// 04. Day of week
function dayOfWeek() {
    switch (arguments[0]) {
        case "Monday": return 1;
        case "Tuesday": return 2;
        case "Wednesday": return 3;
        case "Thursday": return 4;
        case "Friday": return 5;
        case "Saturday": return 6;
        case "Sunday": return 7;
        default: return "error";
    }
}
console.log(dayOfWeek("Monday"));

// 05. Calculator
function calculator(x, y, op) {
    switch (op) {
        case "+": return add(x, y); break;
        case "-": return subtract(x, y); break;
        case "*": return multiply(x, y); break;
        case "/": return divide(x, y); break;
    }
    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        return a / b;
    }
}
console.log(calculator(2, 4, '+'));

// 06. Aggregate elements
function aggregateElements(arr) {
    aggregate(arr, 0, (a, b) => a + b);
    aggregate(arr, 0, (a, b) => a + 1 / b);
    aggregate(arr, '', (a, b) => a + b);

    function aggregate(array, init, func) {
        for (let i = 0; i < array.length; i++) {
            init = func(init, array[i]);
        }
        console.log(init);
    }
}
aggregateElements([1, 2, 3]);

// 07. Words uppercase
function wordsUppercase(str) {
    console.log(str.toUpperCase().split(/\W+/).filter(x => x !== '').join(", "));
}
wordsUppercase('Hi, how are you?');

// 08. Inside volume
function insideVolume(input) {
    for(let i = 0; i < input.length; i += 3) {
        let x = Number(input[i]);
        let y = Number(input[i + 1]);
        let z = Number(input[i + 2]);

        if (isInside(x, y, z)) {
            console.log("inside");
        } else {
            console.log("outside");
        }
    }

    function isInside(a, b, c) {
        let x1 = 10, x2 = 50;
        let y1 = 20, y2 = 80;
        let z1 = 15, z2 = 50;

        if (a >= x1 && a <= x2) {
            if (b >= y1 && b <= y2) {
                if (c >= z1 && c <= z2) {
                    return true;
                }
            }
        } else {
            return false;
        }
    }
}
insideVolume([13.1, 50, 31.5, 
            50, 80, 50,
            -5, 18, 43]
);

// 09. Road radar
function roadRadar(input) {
    let speed = input[0];
    let area = input[1];

    let getLimit = (zone) => {
        switch(zone) {
            case "residential": return 20; break;
            case "city": return 50; break;
            case "interstate": return 90; break;
            case "motorway": return 130; break;
        }
    }

    let getInfraction = (s, l) => {
        let overspeed = s - l;
        if (overspeed <= 0) {
            return false;
        }
        else {
            if (overspeed <= 20) {
                return "speeding";
            } else if (overspeed <= 40) {
                return "excessive speeding";
            } else {
                return "reckless driving";
            }
        }
    }

    let infraction = getInfraction(speed, getLimit(area));

    if (infraction) {
        console.log(infraction);
    }
}
roadRadar([21, "residential"]);

// 10. Template format
function templateFormat(input) {
    let result = '<?xml version="1.0" encoding="UTF-8"?>\n';
    result += "<quiz>\n";
    for (let i = 0; i < input.length; i += 2) {
        result += dataFiller(input[i], input[i + 1]);
    }
    result += "</quiz>";

    function dataFiller(q, a) {
        let dataTags = `    <question>\n        ${q}\n  </question>\n`;
        dataTags += `    <answer>\n        ${a}\n  </answer>\n`;
        return dataTags;
    }
    console.log(result);
}
templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);

// 11. Cooking by numbers
function cookingByNumbers(arr) {
    let n = Number(arr.shift());
    let ops = arr.length;

    for (let i = 0; i < ops; i++) {
        switch(arr[i]) {
            case "chop": n /= 2; console.log(n); break;
            case "dice": n = Math.sqrt(n); console.log(n); break;
            case "spice": n += 1; console.log(n); break;
            case "bake": n *= 3; console.log(n); break;
            case "fillet": n *= 0.8; console.log(n); break;
            default: console.log("error"); break;
        }
    }
}
cookingByNumbers([9, "dice", "spice", "chop", "bake", "fillet"]);

// 12. Modify average
function modifyAverage(n) {
    let str = "" + n;
    let sum = 0;
    
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    
    while (sum / str.length <= 5) {
        sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += Number(str[i]);
        }
        sum += 9;
        str += "9";
    }
    console.log(str)
}
modifyAverage(5835);

// 13. Validity checker
function validtyChecker(arr) {
    [a, b, c, d] = [arr[0], arr[1], arr[2], arr[3]];
    
    if (checkIt(a, b, 0, 0)) {
        printIt(a, b, 0, 0, "valid");
    } else {
        printIt(a, b, 0, 0, "invalid");
    }

    if (checkIt(c, d, 0, 0)) {
        printIt(c, d, 0, 0, "valid");
    } else {
        printIt(c, d, 0, 0, "invalid");
    }

    if (checkIt(a, b, c, d)) {
        printIt(a, b, c, d, "valid");
    } else {
        printIt(a, b, c, d, "invalid");
    }

    function checkIt(x1, y1, x2, y2) {
        let sideA = Math.max(x1, x2) - Math.min(x1, x2);
        let sideB = Math.max(y1, y2) - Math.min(y1, y2);
        let distance = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
        if (distance === Math.round(distance)) {
            return true;
        }
        return false;
    }

    function printIt(p1, p2, p3, p4, word) {
        console.log(`{${p1}, ${p2}} to {${p3}, ${p4}} is ${word}`);
    }
}
validtyChecker([2, 1, 1, 1]);

// 14. Treasure locator
function treasureLocator(arr) {
    for (let i = 0; i < arr.length; i+=2) {
        position(arr[i], arr[i + 1]);
    }

    function position(x, y) {
        if (x >= 1 && x <= 3 && y >= 1 && y <= 3) {
            console.log("Tuvalu");
        } else if (x >= 8 && x <= 9 && y >= 0 && y <= 1) {
            console.log("Tokelau");
        } else if (x >= 5 && x <= 7 && y >= 3 && y <= 6) {
            console.log("Samoa");
        } else if (x >= 0 && x <= 2 && y >= 6 && y <= 8) {
            console.log("Tonga");
        } else if (x >= 4 && x <= 9 && y >= 7 && y <= 8) {
            console.log("Cook");
        } else {
            console.log("On the bottom of the ocean");
        }
    }
}
treasureLocator([4, 2, 1.5, 6.5, 1, 3]);

// 15. Trip length
function tripLenght([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);
    dist12 = calculateDist(x1,y1,x2,y2);
    dist13 = calculateDist(x1,y1,x3,y3);
    dist23 = calculateDist(x2,y2,x3,y3);
    if (Math.max(dist12, dist13, dist23) == dist13) console.log(`1->2->3: ${dist12+dist23}`);
    else if (Math.max(dist12, dist13, dist23) == dist12) console.log(`1->3->2: ${dist13+dist23}`);
    else if (Math.max(dist12, dist13, dist23) == dist23) console.log(`2->1->3: ${dist12+dist13}`);

    function calculateDist(x1, y1, x2, y2) {
        return  Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    }
}
tripLength([0, 0, 2, 0, 4, 0]);

// 16. Radio crystals
function radioCrystals(input) {
    input = input.map(Number);
    let target = input[0];
    for (let i = 1; i < input.length; i++) {
        let crystal = input[i];
        console.log(`Processing chunk ${crystal} microns`);
        let cutCount =0;
        while (crystal / 4 >= target) {  crystal /= 4;  cutCount++ }
        if (cutCount != 0) {
            console.log(`Cut x${cutCount}`);
            console.log("Transporting and washing");
            crystal = Math.floor(crystal);
        }
        let lapCount =0;
        while (crystal-crystal*0.2 >= target) {  crystal -= crystal*0.2;  lapCount++ }
        if (lapCount != 0) {
            console.log(`Lap x${lapCount}`);
            console.log("Transporting and washing");
            crystal = Math.floor(crystal);
        }
        let grindCount =0;
        while (crystal-20 >= target) {  crystal -= 20;  grindCount++ }
        if (grindCount != 0) {
            console.log(`Grind x${grindCount}`);
            console.log("Transporting and washing");
            crystal = Math.floor(crystal);
        }
        let etchCount =0;
        while (crystal-2 >= target-1) {  crystal -= 2;  etchCount++ }
        if (etchCount != 0) {
            console.log(`Etch x${etchCount}`);
            console.log("Transporting and washing");
            crystal = Math.floor(crystal);
        }
        if (crystal < target) {
            crystal++;
            console.log(`X-ray x1`);
        }
        console.log(`Finished crystal ${target} microns`);
    }
}
radioCrystals(['1375', '50000']);

// 17. DNA Helix
function DNAHelix(n) {
    let structure = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let duplicate = structure.slice(0);
    let result ="";

    for (let i = 1; i <= n; i++) {
        if (i % 4 === 1) {
            result += `**${duplicate[0]}${duplicate[1]}**\n`;
            duplicate.splice(0, 2);
            if (duplicate.length === 0 ) {
                duplicate = structure.slice(0);
            }
        } 
        if (i % 4 === 2) {
            result += `*${duplicate[0]}--${duplicate[1]}*\n`;
            duplicate.splice(0, 2);
            if (duplicate.length === 0 ) {
                duplicate = structure.slice(0);
            }
        } 
        if (i % 4 === 3) {
            result += `${duplicate[0]}----${duplicate[1]}\n`;
            duplicate.splice(0, 2);
            if (duplicate.length === 0 ) {
                duplicate = structure.slice(0);
            }
        }
        if (i % 4 === 0) {
            result += `*${duplicate[0]}--${duplicate[1]}*\n`;
            duplicate.splice(0, 2);
            if (duplicate.length === 0 ) {
                duplicate = structure.slice(0);
            }
        }
    }
    console.log(result);
}
DNAHelix(10);