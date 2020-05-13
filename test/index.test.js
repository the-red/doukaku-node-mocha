require('intelli-espower-loader')
const { equal, deepStrictEqual } = require('power-assert')
const { main, pluckHoge, isFuga, isPiyo, judgeFugaPiyo } = require('../src')

describe('Unit test', () => {
  it('hoge抽出', () => {
    deepStrictEqual(pluckHoge('123'), ['1', '2', '3'])
  })
  it('fuga判定', () => {
    deepStrictEqual(isFuga('1'), true)
    deepStrictEqual(isFuga(pluckHoge('123')), true)
    deepStrictEqual(isFuga(pluckHoge('234')), false)
  })
  it('piyo判定', () => {
    deepStrictEqual(isPiyo('2'), true)
    deepStrictEqual(isPiyo(pluckHoge('123')), false)
    deepStrictEqual(isPiyo(pluckHoge('234')), true)
  })
  it('hoge fuga piyo判定', () => {
    deepStrictEqual(judgeFugaPiyo(pluckHoge('345')), 'hoge')
    deepStrictEqual(judgeFugaPiyo(pluckHoge('123')), 'fuga')
    deepStrictEqual(judgeFugaPiyo(pluckHoge('234')), 'piyo')
  })
})

describe('E2E test', () => {
  const test = (input, expected) => {
    it(`${input} -> ${expected}`, () => {
      equal(main(input), expected)
    })
  }

  /* 0 */ test('0', 'hoge')
  /* 1 */ test('1', 'fuga')
  /* 2 */ test('2', 'piyo')
  /* 3 */ test('3', 'hoge')
  /* 4 */ test('123', 'fuga')
  /* 5 */ test('234', 'piyo')
  /* 6 */ test('345', 'hoge')
  /* 7 */ test('1000000000000', 'fuga')
  /* 8 */ test('-1', 'hoge')
  /* 9 */ test('hoge', 'hoge')
  /* 10 */ test('ほげ', 'hoge')
})
