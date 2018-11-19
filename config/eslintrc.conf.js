/**
 * eslint规则配置
 *
 */

module.exports = {
    root: true,
    env: {
        // 环境定义了预定义的全局变量。
        browser: true,
        node: true,
        es6: true,
        mocha: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        // ECMAScript 版本
        ecmaVersion: 6,
        sourceType: 'module',
    },
    extends: 'standard',
    plugins: [
        'html',
        'import',
        'promise',
    ],
    // add your custom rules here 0忽略 1warn 2 error
    rules: {
        // 禁止重复的函数声明
        'no-func-assign': 2,
        // warn alert、
        'no-alert': 1,
        // 禁用 eval()
        'no-eval': 2,
        // 禁用 with 语句
        'no-with': 2,
        // 要求或禁止使用严格模式指令
        'strict': 2,
        // 要求或禁止 var 声明中的初始化(初值)
        'init-declarations': 2,
        // 不允许 catch 子句的参数与外层作用域中的变量同名
        'no-catch-shadow': 0,
        // 禁止删除变量
        'no-delete-var': 2,
        // 不允许标签与变量同名
        'no-label-var': 2,
        // 禁止 var 声明 与外层作用域的变量同名
        'no-shadow': 0,
        // 禁止将变量初始化为 undefined
        'no-undef-init': 2,
        // 禁止将 undefined 作为标识符
        'no-undefined': 2,
        // 强制一行的最大长度
        'max-len': [1, 160],
        // 禁止标识符中有悬空下划线_bar，这里忽略
        'no-underscore-dangle': 0,
        // 禁用不必要的嵌套块
        'no-lone-blocks': 2,
        // 强制在 JSX 属性中一致地使用双引号或单引号
        'jsx-quotes': 0,
        // 允许对象所有键和值在同一行上
        'object-property-newline': [0, {'allowMultiplePropertiesPerLine': true}],
        // promise reject 参数设置为 * 任意类型
        'prefer-promise-reject-errors': [0, {'allowEmptyReject': true}],
        // 箭头函数，不提示
        'arrow-parens': 0,
        // 缩进，使用tab键，请设置编辑器右下角的Spaces,设置为Spaces:4.
        'indent': [0, 'tab', {
            'SwitchCase': 4,
            'ArrayExpression': 1,
            'ObjectExpression': 1
        }],
        // 分号
        'semi': [1, 'always'],
        // 关键词空格
        'keyword-spacing': 0,
        // 块前面加空格
        'space-before-blocks': 0,
        // 函数括号加空格
        'space-before-function-paren': 0,
        // 括号加空格
        'space-in-parens': 0,
        // 注释前加空格
        'spaced-comment': 0,
        // 不使用var
        'no-var': 0,
        // 循环定义函数
        'no-loop-func': 1,
        // 魔鬼数字，暂时提醒？在使用数组的splice时可能会提醒
        'no-magic-numbers': 0,
        // 未使用的变量
        'no-unused-vars': 1,
        // 使用前未定义
        'no-use-before-define': 'warn',
        // 使用未定义的变量
        'no-undef': 1,
        // 空格与tab共存
        'no-mixed-spaces-and-tabs': [0, 'smart-tabs'],
        'brace-style': [1, '1tbs', {'allowSingleLine': true}],
        // “{”需要分行，所有的必须，如if、while等，必须带{}
        'curly': [1, 'all'],
        // 不允许定义全局变量
        'no-restricted-globals': 1,
        // 全局变量不允许修改
        'no-global-assign': 1,
        // 引号
        'quotes': 0,
        // 不允许使用console
        'no-console': 0,
        // 全等
        'eqeqeq': [0, 'always', {'null': 'ignore'}],
        // 使用tab
        'no-tabs': 0,
        // //在条件语句中不要使用赋值语句
        'no-cond-assign': 1,
        // const申明的变量禁止修改
        'no-const-assign': 1,
        // 函数参数禁止重名
        'no-dupe-args': 1,
        // class中的成员禁止重名
        'no-dupe-class-members': 1,
        // 在对象字面量中，禁止使用重复的key
        'no-dupe-keys': 1,
        // 在switch语句中禁止重复的case
        'no-duplicate-case': 1,
        // 禁止使用不匹配任何字符串的正则表达式
        'no-empty-character-class': 1,
        // 在一个本来就会自动转化为布尔值的上下文中就没必要再使用!! 进行强制转化了。
        'no-extra-boolean-cast': 1,
        // 尾部逗号
        'comma-dangle': 0,
        // 不强制驼峰命名
        'camelcase': 2,
        'key-spacing': 0,
        'eol-last': 0,
        // 不允许尾部空格
        'no-trailing-spaces': 0,
        // 这条规则，简单来说就是在case语句中尽量加break，避免不必要的fallthrough错误，如果需要fall through，那么看官网。
        'no-fallthrough': 1,
        // 简单来说不要写这样的数字.1 1.。应该写全，1.1 1.0 .
        'no-floating-decimal': 1,
        // 该规则保证了不使用new Function(); 语句。
        'no-new-func': 1,
        // 不要通过new Object（），来定义对象
        'no-new-object': 1,
        // 当定义字符串、数字、布尔值就不要使用构造函数了，String、Number、Boolean
        'no-new-wrappers': 1,
        // 禁止无意得把全局对象当函数调用了，比如下面写法错误的：Math(), JSON()
        'no-obj-calls': 1,
        // 禁止把require方法和new操作符一起使用。
        'no-new-require': 1,
        // 不要重复申明一个变量
        'no-redeclare': 1,
        // 不要和自身作比较
        'no-self-compare': 1,
        // 禁止对一些关键字或者保留字进行赋值操作，比如NaN、Infinity、undefined、eval、arguments等。
        'no-shadow-restricted-names': 1,
        // 没有执行不到的代码
        'no-unreachable': 1,
        // 在使用parseInt() 方法时，需要传递第二个参数，来帮助解析，告诉方法解析成多少进制。
        'radix': 1,
        // 使用isNaN判断NaN
        'use-isnan': 1,
        // 在使用typeof操作符时，作比较的字符串必须是合法字符串eg:'string' 'object'
        'valid-typeof': 1,
        // 立即执行函数需要用圆括号包围
        'wrap-iife': [1, 'any'],
        // 添加空行
        'padded-blocks': 0,
        // 多个空行
        'no-multiple-empty-lines': 0,
        // =号加空格
        'space-infix-ops': 1,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    },
};
