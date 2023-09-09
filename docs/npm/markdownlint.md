---
title: etc-fe-markdownlint-config
categories:
  - 工程规范
tags:
  - 工程规范
author:
  name: etcetera
  link: https://github.com/AmbitionsXXXV/fe-lint
---

# etc-fe-markdownlint-config

:::tip
etcetera 文档 规范
:::

支持配套的 [markdownlint 可共享配置](https://www.npmjs.com/package/markdownlint#optionsconfig)。

## 安装

需要先行安装 [markdownlint](https://www.npmjs.com/package/markdownlint)：

```bash
npm install etc-fe-markdownlint-config markdownlint --save-dev
```

## 使用

在 `.markdownlint.json` 中继承本包:

```json
{
  "extends": "etc-fe-markdownlint-config"
}
```
