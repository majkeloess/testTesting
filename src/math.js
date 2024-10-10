const distance = (x, y) => {
  return Math.sqrt((x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2);
}

const product = (a, b) => {
  return a * b;
}

module.exports = { distance, product };
