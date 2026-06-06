---
description: GeePay,支付宝免签约即时到账,财付通免签约,微信免签约支付,QQ钱包免签约,免签约支付。
---

<h1>查询订单列表</h1>

## 

<div class="tip custom-block" style="padding-top: 8px">

查询订单列表可用于对账或同步订单状态等

</div>

## 请求地址

<div class="tip custom-block" style="padding-top: 8px">

https://pay.sc58.cn/api/merchant/orders

</div>

## 请求方式

<div class="tip custom-block" style="padding-top: 8px">

POST

</div>

## 请求参数说明
  <table >
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
    <td>1001</td>
    <td></td>
  </tr>

   <tr>
    <td>查询偏移</td>
    <td>offset</td>
    <td>是</td>
    <td>Int</td>
    <td>0</td>
    <td>从0开始</td>
  </tr>

<tr>
    <td>每页条数</td>
    <td>limit</td>
    <td>是</td>
    <td>Int</td>
    <td>50</td>
    <td>最大不能超过50</td>
  </tr>

  <tr>
    <td>过滤订单状态</td>
    <td>status</td>
    <td>否</td>
    <td>Int</td>
    <td>1</td>
    <td>0：未支付，1：已支付</td>
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
<table >
  <tr>
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
    <td>失败或成功时返回提示</td>
  </tr>

  <tr>
    <td>订单列表</td>
    <td>data</td>
    <td>Array</td>
    <td></td>
    <td><a href="pay_query">订单查询</a></td>
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
