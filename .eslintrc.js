module.exports = {
  extends: ['standard', 'prettier', 'prettier/standard'],
  plugins: ['mocha'],
  env: {
    mocha: true,
  },
  globals: {
    // テスト用のグローバル変数 // TODO: 自動的にglobalを認識させたい
    assert: true,
    doukaku: true,
  },
  rules: {
    'no-debugger': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
  },
}
