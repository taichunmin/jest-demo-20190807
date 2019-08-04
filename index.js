exports.fromExcluded = (rate, excluded) => {
  return {
    excluded,
    included: Math.ceil(excluded * (1 + rate)),
    rate: 0.05,
    tax: Math.ceil(excluded * rate)
  }
}
