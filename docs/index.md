---
description: GeePay,支付宝免签约即时到账,财付通免签约,微信免签约支付,QQ钱包免签约,免签约支付。
layout: home

hero:
  name: GeePay
  text: 符合小白的<br>多端免签约支付产品
  tagline: 行业领先的免签约支付平台
  actions:
    - theme: brand
      text: 快速开始
      link: /doc/index
    - theme: alt
      text: 支付测试
      link: https://pay.sc58.cn/user/test.php
  image:
      src: /img/sc58.png
      alt: GeePay

features:
  - icon: ⚡
    title: 享受极速支付无可比拟的体验
    details: 秒级交易处理，闪电般的到账速度，还可以使用基于全渠道的收款方案。
  - icon: 🧩
    title: 使用 API 自定义
    details: 直接在您的业务系统中使用 API 接口，或者使用 SDK 快速构建专属支付流程。
  - icon: 🚀
    title: 速度真的很顶！
    details: 采用高并发架构实现快速的交易处理，使用智能路由实现稳定流畅的收款体验。
  - icon: 📊
    title: 轻松管理
    details: 一站式后台操作，清晰账单与报表，随时随地掌握收款与经营数据。
---

## <span class="contact-title">🤝联系我们</span>

如果遇到了问题，请通过以下方式联系我们，将会有更快为你解决问题。

<div class="contact-container">
  <div class="contact-item">
    <div class="contact-header">
      <span class="contact-label">QQ</span>
      <span class="contact-title-text">作者QQ</span>
    </div>
    <div class="qr-code">
      <img src="/img/qq.png" alt="QQ" style="width: 180px; height: 180px;">
    </div>
    <p>如果扫码失败请直接搜 QQ 号：7504544</p>
  </div>
  <div class="contact-item">
    <div class="contact-header">
      <span class="contact-label">微信</span>
      <span class="contact-title-text">作者微信</span>
    </div>
    <div class="qr-code">
      <img src="/img/wechat.png" alt="微信" style="width: 180px; height: 180px;">
    </div>
    <p>如果扫码失败请直接搜微信号：JIelst</p>
  </div>
  <div class="contact-item">
    <div class="contact-header">
      <span class="contact-label">打赏</span>
      <span class="contact-title-text">赞助我们</span>
    </div>
    <div class="qr-code">
      <img src="/img/tip.png" alt="打赏" style="width: 180px; height: 180px;">
    </div>
    <p>如果绝得不错欢迎赞助我们，支持各种方式的赞助</p>
  </div>
</div>

<style>
.contact-title {
  /* background-color: #FFF3CD; */
  color: #856404;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  border: 1px solid #E9ECEF;
  border-radius: 8px;
  overflow: hidden;
}

.contact-item {
  flex: 1;
  min-width: 200px;
  text-align: center;
  padding: 20px;
  border-right: 1px solid #E9ECEF;
}

.contact-item:last-child {
  border-right: none;
}

.contact-header {
  background-color: #F8F9FA;
  padding: 8px 12px;
  border-radius: 4px;
  margin-bottom: 20px;
  display: inline-block;
}

.contact-label {
  background-color: #007BFF;
  color: white;
  padding: 2px 8px;
  border-radius: 4px 0 0 4px;
  font-size: 12px;
  font-weight: bold;
}

.contact-title-text {
  background-color: #E3F2FD;
  color: #0D47A1;
  padding: 2px 8px;
  border-radius: 0 4px 4px 0;
  font-size: 12px;
  font-weight: bold;
}

.qr-code {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  height: 180px;
}

.qr-code img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;
}

.contact-item p {
  font-size: 12px;
  color: #666;
  margin: 0;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
  }
  
  .contact-item {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #E9ECEF;
  }
  
  .contact-item:last-child {
    border-bottom: none;
  }
}

/* 暗黑模式样式 */
.dark .contact-title {
  color: #3498db;
}

.dark .contact-container {
  border-color: #333;
}

.dark .contact-item {
  border-right-color: #333;
  background-color: #222;
}

.dark .contact-item:last-child {
  border-right: none;
}

.dark .contact-header {
  background-color: #333;
}

.dark .contact-label {
  background-color: #3498db;
}

.dark .contact-title-text {
  background-color: #1a3a5f;
  color: #3498db;
}

.dark .contact-item p {
  color: #ccc;
}

@media (max-width: 768px) {
  .dark .contact-item {
    border-bottom-color: #333;
  }
}
</style>
