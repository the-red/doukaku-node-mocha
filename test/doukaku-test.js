require('./helper')

describe('Unit test', () => {
  it('hoge抽出', () => {
    assert.deepStrictEqual(doukaku.pluckHoge('123'), ['1', '2', '3'])
  })
  it('fuga判定', () => {
    assert.deepStrictEqual(doukaku.isFuga('1'), true)
    assert.deepStrictEqual(doukaku.isFuga(doukaku.pluckHoge('123')), true)
    assert.deepStrictEqual(doukaku.isFuga(doukaku.pluckHoge('234')), false)
  })
  it('piyo判定', () => {
    assert.deepStrictEqual(doukaku.isPiyo('2'), true)
    assert.deepStrictEqual(doukaku.isPiyo(doukaku.pluckHoge('123')), false)
    assert.deepStrictEqual(doukaku.isPiyo(doukaku.pluckHoge('234')), true)
  })
  it('hoge fuga piyo判定', () => {
    assert.deepStrictEqual(doukaku.judgeFugaPiyo(doukaku.pluckHoge('345')), 'hoge')
    assert.deepStrictEqual(doukaku.judgeFugaPiyo(doukaku.pluckHoge('123')), 'fuga')
    assert.deepStrictEqual(doukaku.judgeFugaPiyo(doukaku.pluckHoge('234')), 'piyo')
  })
})

describe('E2E test', () => {
  const test = (input, expected) => {
    it(`${input} -> ${expected}`, () => {
      assert.equal(doukaku.main(input), expected)
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
