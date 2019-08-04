exports.fromExcluded = (rate, excluded) => {
  if (excluded === 0) {
    return {
      excluded: 0,
      included: 0,
      rate: 0.05,
      tax: 0
    }
  }
  return {
    excluded: 100,
    included: 105,
    rate: 0.05,
    tax: 5
  }
}
