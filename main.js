var SimpleLinearRegression = require("ml-regression-simple-linear").SimpleLinearRegression;
// 1. Dataset
var X = [];
var Y = [];
for (var i = 0; i < 20; i++) {
    var x = i + 1;
    var noise = Math.random() * 4 - 2;
    var y = 3 * x + 5 + noise;
    X.push(x);
    Y.push(y);
}
console.log("Données générées :");
console.log({ X: X, Y: Y });
// 2. Create model
var regression = new SimpleLinearRegression(X, Y);
console.log("\nDroite de r\u00E9gression : y = ".concat(regression.slope.toFixed(2), "x + ").concat(regression.intercept.toFixed(2)));
// 3. Predict
var xTest = 25;
var yPred = regression.predict(xTest);
console.log("\nPr\u00E9diction pour x = ".concat(xTest, " : y = ").concat(yPred.toFixed(2)));
