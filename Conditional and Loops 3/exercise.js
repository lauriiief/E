function sumUntil(maxValue) {
  let total = 0;
  for (let i = 0; i <= maxValue; i += 1) {
    total += i;
  }
  return total;
}

console.log(sumUntil(5));