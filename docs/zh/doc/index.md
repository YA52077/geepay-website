---
description: GeePay,支付宝免签约即时到账,财付通免签约,微信免签约支付,QQ钱包免签约,免签约支付。
---
<h1>接口说明</h1>

##  协议规则

<div class="tip custom-block" style="padding-top: 8px">

提交数据格式：application/x-www-form-urlencoded

返回数据格式：JSON

字符编码：UTF-8

签名算法：SHA256WithRSA

</div>

## V2升级说明

<div class="tip custom-block" style="padding-top: 8px">

- V2接口全面使用 RSA 签名算法；V1接口使用 MD5 签名算法

- V2接口改用全新的接口地址，支持退款、代付等功能；V1接口使用submit.php和mapi.php提交订单

- V2接口新增timestamp入参和返回值用于校验时间戳

</div>

## 获取RSA密钥对

<div class="tip custom-block" style="padding-top: 8px">

在 商户后台->个人资料->API信息 页面，点击【生成商户RSA密钥对】，生成后注意保存【商户私钥】。对接接口时只需要用到【平台公钥】与【商户私钥】。

</div>

## 旧版接口文档
<div class="tip custom-block" style="padding-top: 8px">

[查看V1旧版接口文档](https://pay.sc58.cn/doc_old.html)

</div>
