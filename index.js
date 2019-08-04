exports.fromExcluded = (rate, excluded) => {
  return {
    excluded,
    included: excluded * (1 + rate),
    rate: 0.05,
    tax: excluded * rate
  }
}
