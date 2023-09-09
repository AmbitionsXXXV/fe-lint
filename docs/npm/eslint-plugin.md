---
title: etc-fe-eslint-plugin
categories:
  - 工程规范
tags:
  - 工程规范
author:
  name: etcetera
  link: https://github.com/AmbitionsXXXV/fe-lint
---

# etc-fe-eslint-plugin

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

```shell
$ npm install etc-fe-eslint-plugin eslint --save-dev
```

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
  plugin: ['etc-fe-eslint-config'],
  rules: {
    'etc-fe-eslint-plugin/no-secret-info': 'error',
  },
};
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
  extends: 'plugin:etc-fe-eslint-plugin/recommended',
};
```

## 支持的规则

### `no-broad-semantic-versioning`

不要在 `package.json` 中使用太过宽泛的版本指定方式，包括 `*`、`x` 和 `> x` 。

#### 规则内容

参照 [https://docs.npmjs.com/about-semantic-versioning](https://docs.npmjs.com/about-semantic-versioning)。

使用 `*`、 `x` 和 `> x` 指定版本会被警告。

### `no-http-url`

推荐将 HTTP 链接换为 HTTPS 链接。

#### 规则内容

**错误代码**示例:

```js
var test = 'http://etcetera.com';
var jsx = <img src="http://etcetera.com">;
```

#### 何时不适用

如果你的网站只支持 HTTP 时。

### `no-js-in-ts-project`

不推荐在项目中同时存在 `JS` 和 `TS` 文件。

#### 规则内容

**错误示例**，TS 项目中包含 JS 文件:

```Bash
.
├── index.ts
├── home.js
└── tsconfig.json
```

**正确示例**:

```Bash
.
├── index.ts
├── home.ts
└── tsconfig.json
```

#### 规则选项

默认当存在 `commitlint.config.js`, `eslintrc.js`, `prettierrc.js`, `stylelintrc.js` 文件时不会报错，支持自定义设置文件白名单。

### `no-secret-info`

不在代码中直接通过纯文本值设置 `password` `token` 和 `secret` 信息。

#### 规则内容

在包含 `password` `token` and `secret` 名称的 key 中禁止使用纯文本值。

**错误**代码示例:

```js
var accessKeySecret = 'xxxx';

var client = {
  accessKeyToken: 'xxxx',
};
```

**正确**代码示例:

```js
var accessKeySecret = process.env.ACCESS_KEY_SECRET;

var client = {
  accessKeyToken: process.env.ACCESS_KEY_SECRET,
};
```
