# GeePay Official Website

GeePay 官方网站与 API 文档项目,专注于展示 GeePay 产品介绍、接口文档、赞助信息和中英文双语文档。

## 项目简介

GeePay 是一个免签约支付产品，面向开发者和商户提供支付宝、微信支付、QQ 钱包等支付方式的快速接入能力。

本仓库用于维护 GeePay 官方文档站点，包含：

- 产品首页
- API 接口文档
- 支付、退款、商户、代付相关接口说明
- SDK 下载说明
- 赞助与联系方式
- 中文 / English 双语页面

## 项目预览

### 中文站点

<img src="docs/public/img/zh-sc58.png" alt="GeePay 中文站点预览" width="800">

### English Site

<img src="docs/public/img/en-sc58.png" alt="GeePay English Site Preview" width="800">

## 目录结构

```text
.
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # VitePress 配置与多语言配置
│   │   └── theme/             # 自定义主题样式与组件
│   ├── public/                # 静态资源，图片与字体
│   ├── zh/                    # 中文文档
│   │   ├── index.md
│   │   ├── doc/
│   │   └── sponsorship/
│   ├── en/                    # English documentation
│   │   ├── index.md
│   │   ├── doc/
│   │   └── sponsorship/
│   ├── index.md               # 根路径跳转到 /zh/
│   └── package.json
├── netlify.toml               # Netlify 构建配置
└── README.md
```

## 多语言路由

当前站点支持两种语言：

| 语言     | 路径   |
| -------- | ------ |
| 简体中文 | `/zh/` |
| English  | `/en/` |

根路径 `/` 会自动跳转到 `/zh/`。

常用页面：

- 中文首页：`/zh/`
- 英文首页：`/en/`
- 中文接口文档：`/zh/doc/index`
- 英文接口文档：`/en/doc/index`

## 本地开发

进入 docs 目录安装依赖：

```bash
cd docs
pnpm install
```

如果使用 npm：

```bash
cd docs
npm install
```

启动开发服务器：

```bash
pnpm run dev
```

或：

```bash
npm run dev
```

默认访问地址：

```text
http://127.0.0.1:5173/
```

## 构建项目

```bash
cd docs
pnpm run build
```

或：

```bash
cd docs
npm run build
```

构建产物位于：

```text
docs/.vitepress/dist
```

## 预览构建结果

```bash
cd docs
pnpm run preview
```

或：

```bash
cd docs
npm run preview
```

## 部署说明

项目已包含 Netlify 配置：[netlify.toml](netlify.toml)。

Netlify 构建命令：

```bash
npm --prefix docs install && npm --prefix docs run build
```

发布目录：

```text
docs/.vitepress/dist
```

## 文档维护说明

### 中文文档

中文内容位于：

```text
docs/zh/
```

### 英文文档

英文内容位于：

```text
docs/en/
```

### 静态资源

图片、二维码、字体等资源位于：

```text
docs/public/
```

在 Markdown 中可以使用绝对路径引用，例如：

```md
![GeePay Logo](/img/sc58.png)
```

## 主要功能

- 响应式 VitePress 文档站
- 中英文双语切换
- 本地搜索
- 自定义首页样式
- 自定义导航、侧边栏和主题色
- API 文档结构化展示
- Netlify 自动部署支持

## 相关链接

- 官方网站：https://sc58.cn
- GitHub 仓库：https://github.com/YA52077/geepay-website
- 支付体验：https://pay.sc58.cn/user/test.php

## 联系方式

- QQ：7504544
- WX：JIelst

## License

本项目仅用于 GeePay 官方网站与文档展示。具体授权请以项目所有者说明为准。
