

# babel 的几个关键package

### babel-cli babel的命令行使用

### babel-node 
### babel-register
### babel-core babel的核心代码部分


## babel是如何读懂javascript代码的
对于目标
- 解析：将代码字符串解析成抽象语法树
- 变换：对抽象语法树进行变换操作
- 生成：根据变换后的抽象语法树再生成代码字符串

解析


## 访问者模式


### 常用的解析器性能对比
可以看到

AST三板斧：

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
