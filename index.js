var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

// Displaying array into table to get a better visual of the indexes
// console.table(finances);

// Intended to display array in HTML in table format, but table was too long
// Outputting array into table in HTML
// const table = document.querySelector("#finances");
// const headers = table.querySelector("thead tr");
// const body = table.querySelector("tbody");
                    
// Create headers
// for (const key in finances[0]) {
//   const header = document.createElement("th");
//   header.innerText = key;
//   headers.append(header);
// }

// Create tbody rows
// finances.forEach(obj => {
// Create row
//   const row = document.createElement("tr");
//   body.append(row);
  
// Create row element
//   for (const key in obj) {
//     const value = document.createElement("td");
//     value.innerText = obj[key];
//     row.append(value);
//   }
// });

// Change format of currency from dollars to pounds with 2 decimal places
var pounds = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 2
}
);

// Heading information for the console output
console.log("Financial Analysis");
console.log("----------------------------");

// The total number of months included in the dataset.
var monthTotal = (finances.length);
console.log("Total Months: " + monthTotal);
document.getElementById("months").innerHTML = monthTotal;

// The net total amount of Profit/Losses over the entire period.
// Setting variables, intialising profitLosses to 0
var monthlyFinances;
var profitLosses = 0;
var monthlyProfitLoss;

// Looping through the nested array and setting montlyProfitLoss to equal the number element type in the arrays
for (i = 0; i < finances.length; i++){
    monthlyFinances = finances[i];
    monthlyProfitLoss = monthlyFinances[1];
    // Setting profitLosses variable to equal profitLosses + monthlyProfitLoss
    profitLosses += monthlyProfitLoss;
}

console.log("Total: " + pounds.format(profitLosses));
document.getElementById("profitLoss").innerHTML = pounds.format(profitLosses);

// The average of the changes in Profit/Losses over the entire period.
    // You will need to track what the total change in profits are from month to month and then find the average.
    // (Total/Number of months)

// Initialising variables
var monthValues = 0;
var monthSum = 0
var plAverage = 0;
var differences = [];

// Traversing outter and inner loops to get the month value differences
for (var i = 0; i < finances.length; i++) {
    for (var j = i + 1; j < finances.length; j++) {
        monthValues = finances[j][1] - finances[i][1];
        // Pushing month values to array
        differences.push(monthValues);
        i++;
    }
}

// Looping and adding the differences together
for(var k = 0; k < differences.length; k++) {
    monthSum += differences[k];
}

// Get average of changes for the month differences 
// (excluding first month as there is nothing to compare against)
plAverage = monthSum / (finances.length -1);

console.log("Average Change: " + pounds.format(plAverage));
document.getElementById("plAverage").innerHTML = pounds.format(plAverage);

// Outputing Average change to console fixed to 2 decimal places
// console.log('Average Change: $' + plAverage.toFixed(2));

// The greatest increase in profits (date and amount) over the entire period.
var maximumProfits = Math.max(...differences);
var profitsMonth = differences.indexOf(maximumProfits) + 1;
console.log("Greatest Increase in Profits: " + finances[profitsMonth][0] + " (" + pounds.format(maximumProfits) + ")");
document.getElementById("grtIncrease").innerHTML = finances[profitsMonth][0] + " (" + pounds.format(maximumProfits) + ")";

// The greatest decrease in losses (date and amount) over the entire period.
var maximumLosses = Math.min(...differences);
var lossesMonth = differences.indexOf(maximumLosses) + 1;   
console.log("Greatest Decrease in Losses: " + finances[lossesMonth][0] + " (" + pounds.format(maximumLosses) + ")");
document.getElementById("grtLoss").innerHTML = finances[lossesMonth][0] + " (" + pounds.format(maximumLosses) + ")";