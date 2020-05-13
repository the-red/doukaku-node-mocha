const pluckHoge = (input) => {
  const hoge = input.split('')
  return hoge
}

const isFuga = (hoge) => {
  return hoge[0] === '1'
}

const isPiyo = (hoge) => {
  return hoge[0] === '2'
}

const judgeFugaPiyo = (hoge) => {
  if (isFuga(hoge)) {
    return 'fuga'
  }
  if (isPiyo(hoge)) {
    return 'piyo'
  }
  return 'hoge'
}

const main = (...argv) => {
  const input = argv[0]
  const hoge = pluckHoge(input)
  const fugaPiyo = judgeFugaPiyo(hoge)
  return fugaPiyo
}

module.exports = {
  main,
  pluckHoge,
  isFuga,
  isPiyo,
  judgeFugaPiyo,
}
