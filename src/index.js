const pluckFirstCharacter = (string) => {
  const [character] = string.split('')
  return character
}

const isFuga = (character) => {
  return character === '1'
}

const isPiyo = (character) => {
  return character === '2'
}

const judgeHogeFugaPiyo = (character) => {
  if (isFuga(character)) {
    return 'fuga'
  }
  if (isPiyo(character)) {
    return 'piyo'
  }
  return 'hoge'
}

const main = (...argv) => {
  const input = argv[0]
  const character = pluckFirstCharacter(input)
  return judgeHogeFugaPiyo(character)
}

module.exports = {
  main,
  pluckFirstCharacter,
  isFuga,
  isPiyo,
  judgeHogeFugaPiyo,
}
