# fe-lint

etcetera 前端编码规范工程化

## :mountain: 能力支持

### 1. 全面的前端生态

支持前端全部生态，无需关注环境，支持直接使用

### 2. 完善的规范配件

支持对全部前端配置实现一键接入、一键扫描、一键修复、一键升级

### 3. 完整的测试用例

配套完整的测试用例，帮助您提升项目健壮性

## :bulb: 为什要学习前端工程化

本仓库提供：

1. 如何通过 `monorepo` 和 `pnpm` 的多包管理方式开发一套多 `npm` 包的管理方式，以及如何将发包流程植入 `CI` 实现自动化发布，以及`CHANGLOG`的自动化更新部署；
2. 在现有前端前沿的研发流程下，我们可以通过哪些工具提升项目的编码规范，并提供配套工具的最佳实践，包括但不限于`eslint`、`stylelint`、`commitlint`、`markdownlint`、`husky`等，以及如何将单元测试植入配套工具的具体实现；
3. 如何通过脚手架的方式，以交互式形式一键接入，实现对`JavaScript`、`Typescript`、`React`、`Vue`等不同类型的前端项目下的标准的语法限制；
4. 如何对存量项目进行优化：对于存量代码不符合规范的问题，支持一键扫描和一键修复，一键式的修复存量问题，最小化存量代码的更新成本；
5. 如何对新项目添加规范：支持一键接入新增项目，通过结合`gitpre-commit`钩子，对提交文件进行编码规范的扫描；同时通过`husky`的`commit-msg`钩子，对本次代码提交`message`的格式进行扫描。

## :couch_and_lamp: 配套工具

引入了多个业界流行的 `Linter` 作为规范文档的配套工具，并根据规范内容定制了对应的规则包，包括：

| 规范                                                    | Lint 工具                                                        | npm 包                                                                                  |
|-------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------------------------------|
| JavaScript 编码规范 <br/> TypeScript 编码规范 <br/> Node 编码规范 | [ESLint](https://eslint.org/)                                  | [etc-fe-eslint-config](https://www.npmjs.com/package/etc-fe-eslint-config)             |
| CSS 编码规范                                              | [stylelint](https://stylelint.io/)                             | [etc-fe-stylelint-config](https://www.npmjs.com/package/etc-fe-stylelint-config)       |
| Git 规范                                                | [commitlint](https://commitlint.js.org/#/)                     | [etc-fe-commitlint-config](https://www.npmjs.com/package/etc-fe-commitlint-config)     |
| 文档规范                                                  | [markdownlint](https://github.com/DavidAnson/markdownlint)     | [etc-fe-markdownlint-config](https://www.npmjs.com/package/etc-fe-markdownlint-config) |
| Eslint 插件                                             | [ESlint Plugin](https://eslint.org/docs/latest/extend/plugins) | [etc-fe-eslint-plugin](https://www.npmjs.com/package/etc-fe-eslint-plugin)             |

[etc-fe-lint](https://www.npmjs.com/package/etc-fe-lint) 收敛屏蔽了上述依赖和配置细节，提供简单的 `CLI` 和 `Node.js API`，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 `git commit` 卡口，降低项目接入规范的成本。

您可以使用[etc-fe-lint](https://www.npmjs.com/package/etc-fe-lint) 方便地为项目接入全部规范。

## 其他

## 测试`markdown config`

全局安装`markdownlint-cli`

```bash
npm i -g markdownlint-cli
pnpm run lint
```

### 生成`CHANGELOG`

参考[conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli)，全局安装`conventional-changelog-cli`：

```bash
npm install -g conventional-changelog-cli
pnpm run changelog
```
