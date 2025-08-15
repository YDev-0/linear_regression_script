const { SimpleLinearRegression } = require("ml-regression-simple-linear");

// 1. Dataset
const X: number[] = [];
const Y: number[] = [];

for (let i = 0; i < 20; i++) {
  const x = i + 1;
  const noise = Math.random() * 4 - 2;
  const y = 3 * x + 5 + noise;
  X.push(x);
  Y.push(y);
}

console.log("Données générées :");
console.log({ X, Y });

// 2. Create model
const regression = new SimpleLinearRegression(X, Y);

console.log(
  `\nDroite de régression : y = ${regression.slope.toFixed(
    2
  )}x + ${regression.intercept.toFixed(2)}`
);

// 3. Predict
const xTest = 25;
const yPred = regression.predict(xTest);
console.log(`\nPrédiction pour x = ${xTest} : y = ${yPred.toFixed(2)}`);
