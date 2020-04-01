(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,
        getArea: function () { //within a circle object, there is a function with the key getArea
            var area = Math.PI* (Math.pow(this.radius, 2));
            return area; //
        },
        logInfo: function (doRounding) {//within a circle object, there is a function with the key logInfo
            var area= this.getArea();
            if (doRounding === true){
                area = Math.round(area);
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };



    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
