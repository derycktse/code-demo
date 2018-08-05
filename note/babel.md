

# babel 的几个关键package


我们先来看下babel几个主要package功能
### babel-core babel的核心代码部分
- babel-cli 允许我们在命令行下使用babel，我们可以直接通过命令对文件进行转换
- babel-register 在node里面将babel挂载到`require`上面，这样我们可以在node runtime里面实时将代码进行转换
- babel-node 与node命令一样，区别是代码会经过babel的转换，实际上babel-node 也通过babel-register进行node runtime 的挂载


## babel是如何读懂javascript代码的
那么，babel是如何读懂我们的javascript 代码的呢？

对于目标
- 解析：将代码字符串解析成抽象语法树
- 变换：对抽象语法树进行变换操作
- 生成：根据变换后的抽象语法树再生成代码字符串

我们可以看到，上面提到一个关键的概念是抽象语法树，抽象语法树是什么呢

## (AST)抽象语法树
AST，它的全名是abstract syntax tree(抽象语法树)，就算没有学过编译原理的同学应该也听说过它。

wikipedia定义：In computer science, an abstract syntax tree (AST), or just syntax tree, is a tree representation of the abstract syntactic structure of source code written in a programming language.

翻译为：在计算机科学中，抽象语法树（abstract syntax tree或者缩写为AST），或者语法树（syntax tree），是源代码的抽象语法结构的树状表现形式，这里特指编程语言的源代码。

### AST的解析过程
一个js语句是怎么被解析成AST的呢？
主要经过下面两个步骤:
- 词法分析
- 语法分析

词法分析阶段把字符串形式的代码转换为 令牌（tokens） 流。

比如`n*n`, 会被解析成如下的token流

```json
[
  { type: { ... }, value: "n", start: 0, end: 1, loc: { ... } },
  { type: { ... }, value: "*", start: 2, end: 3, loc: { ... } },
  { type: { ... }, value: "n", start: 4, end: 5, loc: { ... } },
  ...
]
```

而语法分析阶段会把一个令牌流转换成 AST 的形式。 这个阶段会使用令牌中的信息把它们转换成一个 AST 的表述结构，这样更易于后续的操作。

常用的JavaScript Parser有：

- Esprima
- UglifyJS2
- Traceur
- Acorn
- Shift

Acorn的性能是最好的，而babel的解析器babylon就是fork这个项目出来的


我们可以通过一些现有的包模拟一下babel的转换过程

- 通过 esprima 把源码转化为AST
- 通过 estraverse 遍历并更新AST
- 通过 escodegen 将AST重新生成源码


## AST的应用场景
- 代码测试覆盖率
- uglifyjs
- webpack
- eslint对于代码错误或风格的检查
- IDE的错误提示，格式化，高亮，自动补全等等
- rollup 的tree shaking
