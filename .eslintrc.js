module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        // env.es6===true默认开启此项。此项表示支持es6语法，不包括es6全局变量
        ecmaVersion: 6,
        // 设置为 "script" (默认) 或 "module"（如果你的代码是 Es模块)。
        sourceType: 'module'
        // 额外想使用的语言特性
        // "ecmaFeatures": {
        //     "jsx": true
        // }
    },
    env: {
        node: true,
        es6: true
    }
}
