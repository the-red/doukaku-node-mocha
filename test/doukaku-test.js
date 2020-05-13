require('./helper')

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
