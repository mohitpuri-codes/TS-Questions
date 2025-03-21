"use strict";
// Benefits of Using Namespaces
// Organize Code: Namespaces help group related code together, making it easier to manage and maintain.
// Prevent Conflicts: They avoid naming issues by keeping your code in its own unique space.
// Hide Details: You can keep internal code hidden and only show the necessary parts to the outside world.
// Break Down Code: Namespaces let you divide a large project into smaller, easier-to-manage pieces.
// Not preferred for new projects
var myNameSpace;
(function (myNameSpace) {
    function callInMyNameSpace() {
        console.log('hello');
    }
    myNameSpace.callInMyNameSpace = callInMyNameSpace;
})(myNameSpace || (myNameSpace = {}));
myNameSpace.callInMyNameSpace();
var bruv;
(function (bruv) {
    function callInMyNameSpace() {
        console.log('hi');
    }
    bruv.callInMyNameSpace = callInMyNameSpace;
})(bruv || (bruv = {}));
