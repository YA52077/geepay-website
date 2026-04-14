---
description: GeePay,支付宝免签约即时到账,财付通免签约,微信免签约支付,QQ钱包免签约,免签约支付。
---

<h1>签名规则</h1>

## 签名步骤

<div class="tip custom-block" style="padding-top: 8px">
对本平台接口发起的请求，需要进行签名。

- 获取请求报文所有非空请求参数，不包括数组、字节类型参数，如文件、字节流，剔除sign、sign_type字段，并按照第一个字符的键值ASCII码递增排序（字母升序排序），如果遇到相同字符则按照第二个字符的键值ASCII码递增排序，以此类推。

- 将排序后的参数和对应值，组合成“参数=参数值”的格式，并且把这些参数用 & 字符连接起来，此时生成的字符串为待签名字符串。

- 使用商户私钥，对待签名字符串计算RSA签名（SHA256WithRSA），得到签名sign。
</div>



## 签名步骤

<div class="tip custom-block" style="padding-top: 8px">
针对接口返回的数据，以及异步通知回调的数据，需进行验签。

- 先根据签名步骤里面的1～2，获取到待签名字符串。

- 使用平台公钥，根据签名字符串sign，对待签名字符串与进行RSA验签(SHA256WithRSA)
</div>



## 注意事项
<div class="tip custom-block" style="padding-top: 8px">

- 商户私钥(private key)需填写到代码中供签名时使用。生成的私钥需妥善保管，避免遗失，不要泄露。

- 平台公钥(public key)用于接口返回数据、异步通知回调数据的验签。

- 具体发起支付相关流程的示例代码可下载SDK查看。

</div>
