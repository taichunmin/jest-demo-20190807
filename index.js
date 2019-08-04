exports.fromExcluded = (rate, excluded) => {
  return {
    excluded,
    included: Math.round(excluded * (1 + rate)),
    rate: 0.05,
    tax: Math.round(excluded * rate)
  }
}
