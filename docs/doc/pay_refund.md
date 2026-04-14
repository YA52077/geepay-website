---
description: GeePay,支付宝免签约即时到账,财付通免签约,微信免签约支付,QQ钱包免签约,免签约支付。
---
<h1>订单退款</h1>

##  通知类型
<div class="tip custom-block" style="padding-top: 8px">

需要先在商户后台开启订单退款API接口开关，才能调用该接口发起订单退款

</div>

##  请求地址
<div class="tip custom-block" style="padding-top: 8px">

https://pay.sc58.cn/api/pay/refund

</div>

##  请求方式
<div class="tip custom-block" style="padding-top: 8px">

POST

</div>


##  请求参数说明

<table>
<tr>
    <th>字段名</th>
    <th>变量名</th>
    <th>必填</th>
    <th>类型</th>
    <th>示例值</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>商户ID</td>
    <td>pid</td>
    <td>是</td>
    <td>Int</td>
    <td>1000</td>
    <td></td>
  </tr>

  <tr>
    <td>平台订单号</td>
    <td>trade_no</td>
    <td>特殊</td>
    <td>String</td>
    <td>20160806151343349</td>
    <td>与商户订单号必传其一</td>
  </tr>

   <tr>
    <td>商户订单号</td>
    <td>out_trade_no</td>
    <td>特殊</td>
    <td>String</td>
    <td>20160806151343351</td>
    <td>与平台订单号必传其一</td>
  </tr>


   <tr>
    <td>退款金额</td>
    <td>money</td>
    <td>是</td>
    <td>String</td>
    <td>1.00</td>
    <td>单位：元</td>
  </tr>


   <tr>
    <td>商户退款单号</td>
    <td>out_refund_no</td>
    <td>否</td>
    <td>String</td>
    <td>20160806151343391</td>
    <td>可避免出现重复请求退款</td>
  </tr>

<tr>
    <td>当前时间戳</td>
    <td>timestamp</td>
    <td>是</td>
    <td>String</td>
    <td>1721206072</td>
    <td>10位整数，单位秒</td>
  </tr>

  <tr>
    <td>签名字符串</td>
    <td>sign</td>
    <td>是</td>
    <td>String</td>
    <td></td>
    <td>参考签名规则</td>
  </tr>

  <tr>
    <td>签名类型</td>
    <td>sign_type</td>
    <td>否</td>
    <td>String</td>
    <td>RSA</td>
    <td>默认为RSA</td>
  </tr>
  </table>

##  返回参数说明

<table>
<tr>
    <th>字段名</th>
    <th>变量名</th>
    <th>类型</th>
    <th>示例值</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>状态码</td>
    <td>code</td>
    <td>Int</td>
    <td>0</td>
    <td>0为成功，其它值为失败</td>
  </tr>
  <tr>
    <td>返回信息</td>
    <td>msg</td>
    <td>String</td>
    <td></td>
    <td>失败或成功时返回提示</td>
  </tr>

  <tr>
    <td>平台退款单号</td>
    <td>refund_no</td>
    <td>String</td>
    <td>20160806151343349</td>
    <td></td>
  </tr>

  <tr>
    <td>商户退款单号</td>
    <td>out_refund_no</td>
    <td>String</td>
    <td>20160806151343351</td>
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
    <td>退款金额</td>
    <td>money</td>
    <td>String</td>
    <td></td>
    <td></td>
  </tr>

 <tr>
    <td>扣减商户余额</td>
    <td>reducemoney</td>
    <td>String</td>
    <td></td>
    <td></td>
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

##  其他说明
<div class="tip custom-block" style="padding-top: 8px">

- 少数插件对接的第三方平台不支持部分金额退款

</div>