(function () {
    "use strict";
    console.log('test')

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split('|');

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsBreak = planetsArray.join('<br>');
    document.write(planetsBreak); /// will render code as html
    console.log(planetsBreak);
    //in html, it will break a break after each word so that each word is on a new line.


    var planetsList = planetsString.split('|');
    planetsList.unshift('<ul>');
    planetsList.push('</ul>');
    planetsList.splice(1,0,'<li>');
    planetsList.splice(3,0,'</li>');
    planetsList.splice(4,0,'<li>');
    planetsList.splice(6,0,'</li>');
    planetsList.splice(7,0,'<li>');
    planetsList.splice(9,0,'</li>');
    planetsList.splice(10,0,'<li>');
    planetsList.splice(12,0,'</li>');
    planetsList.splice(13,0,'<li>');
    planetsList.splice(15,0,'</li>');
    planetsList.splice(16,0,'<li>');
    planetsList.splice(18,0,'</li>');
    planetsList.splice(19,0,'<li>');
    planetsList.splice(21,0,'</li>');
    planetsList.splice(22, 0,'<li>');
    planetsList.splice(24,0,'</li>');


    console.log(planetsList);

    var planetsFinishedList= planetsList.join('');


    console.log(planetsFinishedList);
    document.write(planetsFinishedList);
    //walkthrough bonus

    // var planetsUL ='<ul><li>';
    // planetsUL += planetsArray.join('</li><li>');
    // planetsUL += "</li></ul>";
    // document.write(planetsUL);

    //for-each loop
var planetsUL = "<ul>"; // how to start
planetsArray.forEach(function(planet){
    planetsUL += '<li>' + planet + "</li>"
});
planetsUL += "</ul>" // how to end

console.log('for each loop: ' + planetsUL);
document.write(planetsUL);
})();

