---
description: GeePay,支付宝免签约即时到账,财付通免签约,微信免签约支付,QQ钱包免签约,免签约支付。
---

<h1>可用余额查询</h1>

## 请求地址

<div class="tip custom-block" style="padding-top: 8px">

$PAY_URL/api/transfer/balance

</div>

## 请求方式

<div class="tip custom-block" style="padding-top: 8px">

POST

</div>


## 请求参数说明

<table style="width: 100%;">
  <tr style="width: 100%;">
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
    <td>1001</td>
    <td></td>
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
    <td>是</td>
    <td>String</td>
    <td>RSA</td>
    <td>默认为RSA</td>
  </tr>
</table>

## 返回参数说明

<table style="width: 100%;">
  <tr style="width: 100%;">
    <th>字段名</th>
    <th>变量名</th>
    <th>类型</th>
    <th>示例值</th>
    <th>描述</th>
  </tr>

  <tr>
    <td>返回状态码</td>
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
    <td>成功或失败时返回提示</td>
  </tr>
  <tr>
    <td>商户可用余额</td>
    <td>available_money</td>
    <td>String</td>
    <td>1.00</td>
    <td>单位：元</td>
  </tr>
  <tr>
    <td>转账手续费率</td>
    <td>transfer_rate</td>
    <td>String</td>
    <td>3</td>
    <td>%</td>
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
