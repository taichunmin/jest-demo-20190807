const sut = require('./index')
test.each([
  [0.05, 100, 5, 105],
  [0.05, 0, 0, 0],
  [0.05, 16190, 810, 17000]
])('未稅價計算營業稅，稅率 %d，未稅價 %i 元，營業稅 %i 元，含稅價 %i 元', async (rate, excluded, tax, included) => {
  const actual = sut.fromExcluded(rate, excluded)
  expect(actual).toEqual({ rate, excluded, tax, included })
})