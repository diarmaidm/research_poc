module.exports = fibonacci2 = (n) => {

  let low = 1;
  let high = 1;

  for (let i = 0; i < n; i++) {
    let oldHigh = high;
    high = low + high;
    low = oldHigh;
  }

  return low;
}