---
description: GeePay,支付宝免签约即时到账,财付通免签约,微信免签约支付,QQ钱包免签约,免签约支付。
---
<h1>支付结果通知</h1>

##  通知类型
<div class="tip custom-block" style="padding-top: 8px">

服务器异步通知（notify_url）、页面跳转通知（return_url）

</div>

##  请求方式
<div class="tip custom-block" style="padding-top: 8px">

GET

</div>


##  请求参数说明

<table>
<tr>
    <th>字段名</th>
    <th>变量名</th>
    <th>类型</th>
    <th>示例值</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>商户ID</td>
    <td>pid</td>
    <td>Int</td>
    <td>1000</td>
    <td></td>
  </tr>

  <tr>
    <td>平台订单号</td>
    <td>trade_no</td>
    <td>String</td>
    <td>20160806151343349</td>
    <td></td>
  </tr>

   <tr>
    <td>商户订单号</td>
    <td>out_trade_no</td>
    <td>String</td>
    <td>20160806151343351</td>
    <td>与商户订单号必传其一</td>
  </tr>


   <tr>
    <td>接口订单号</td>
    <td>api_trade_no</td>
    <td>String</td>
    <td>40001249985198893</td>
    <td>微信支付宝返回的单号</td>
  </tr>


   <tr>
    <td>支付方式</td>
    <td>type</td>
    <td>String</td>
    <td>alipay</td>
    <td><a href = "paytype">支付方式列表</a></td>
  </tr>


   <tr>
    <td>交易状态</td>
    <td>trade_status</td>
    <td>String</td>
    <td>TRADE_SUCCESS</td>
    <td>固定为TRADE_SUCCESS</td>
  </tr>

  <tr>
    <td>订单创建时间</td>
    <td>addtime</td>
    <td>String</td>
    <td>2024-07-01 16:47:32</td>
    <td></td>
  </tr>

  <tr>
    <td>订单完成时间</td>
    <td>endtime</td>
    <td>String</td>
    <td>2024-07-01 16:49:24</td>
    <td>仅完成才返回</td>
  </tr>

  <tr>
    <td>商品名称</td>
    <td>name</td>
    <td>String</td>
    <td></td>
    <td></td>
  </tr>

  <tr>
    <td>商品金额</td>
    <td>money</td>
    <td>String</td>
    <td>100.00</td>
    <td>单位元</td>
  </tr>

  <tr>
    <td>业务扩展参数</td>
    <td>param</td>
    <td>String</td>
    <td></td>
    <td></td>
  </tr>

  <tr>
    <td>支付用户标识</td>
    <td>buyer</td>
    <td>String</td>
    <td></td>
    <td>一般为openid</td>
  </tr>

  

<tr>
    <td>当前时间戳</td>
    <td>timestamp</td>
    <td>String</td>
    <td>1721206072</td>
    <td>10位整数，单位秒</td>
  </tr>

  <tr>
    <td>签名字符串</td>
    <td>sign</td>
    <td>String</td>
    <td></td>
    <td>参考签名规则</td>
  </tr>

  <tr>
    <td>签名类型</td>
    <td>sign_type</td>
    <td>String</td>
    <td>RSA</td>
    <td>默认为RSA</td>
  </tr>
  </table>

##  返回内容说明
<div class="tip custom-block" style="padding-top: 8px">

收到异步通知后，需返回success以表示服务器接收到了订单通知

</div>

##  其他说明
<div class="tip custom-block" style="padding-top: 8px">

- 商户系统代码内务必对返回的签名sign进行校验，并且判断trade_status的值是否等于TRADE_SUCCESS
- 支付平台可能会增加回调字段，验证签名时必须支持增加的扩展字段

</div>