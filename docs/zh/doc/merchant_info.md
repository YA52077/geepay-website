---
description: GeePay,支付宝免签约即时到账,财付通免签约,微信免签约支付,QQ钱包免签约,免签约支付。
---
<h1>查询商户信息</h1>

## 请求地址

<div class="tip custom-block" style="padding-top: 8px">

$PAY_URL/api/merchant/info

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
    <td>商户ID</td>
    <td>pid</td>
    <td>Int</td>
    <td>1001</td>
    <td></td>
  </tr>

  <tr>
    <td>商户状态</td>
    <td>status</td>
    <td>Int</td>
    <td>1</td>
    <td>0：已封禁，1：正常，2：待审核</td>
  </tr>

  <tr>
    <td>支付状态</td>
    <td>pay_status</td>
    <td>Int</td>
    <td>1</td>
    <td>0：关闭，1：开启</td>
  </tr>

  <tr>
    <td>结算状态</td>
    <td>settle_status</td>
    <td>Int</td>
    <td>1</td>
    <td>0：关闭，1：开启</td>
  </tr>

  <tr>
    <td>商户余额</td>
    <td>money</td>
    <td>String</td>
    <td>1000.00</td>
    <td>单位：元</td>
  </tr>

  <tr>
    <td>结算方式</td>
    <td>settle_type</td>
    <td>Int</td>
    <td>1</td>
    <td><a href="merchant_info#结算方式列表">结算方式列表</a></td>
  </tr>

  <tr>
    <td>结算账户</td>
    <td>settle_account</td>
    <td>String</td>
    <td>alipay@alipay.co</td>
    <td></td>
  </tr>

  <tr>
    <td>结算账户姓名</td>
    <td>settle_name</td>
    <td>String</td>
    <td>张三</td>
    <td></td>
  </tr>

  <tr>
    <td>订单总数量</td>
    <td>order_num</td>
    <td>Int</td>
    <td>10</td>
    <td></td>
  </tr>

  <tr>
    <td>今日订单数量</td>
    <td>order_num_today</td>
    <td>Int</td>
    <td>3</td>
    <td></td>
  </tr>

  <tr>
    <td>昨日订单数量</td>
    <td>order_num_lastday</td>
    <td>Int</td>
    <td>2</td>
    <td></td>
  </tr>

  <tr>
    <td>今日订单收入</td>
    <td>order_money_today</td>
    <td>String</td>
    <td>200.00</td>
    <td>单位：元</td>
  </tr>

  <tr>
    <td>昨日订单收入</td>
    <td>order_money_lastday</td>
    <td>String</td>
    <td>350.00</td>
    <td>单位：元</td>
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

## 结算方式列表
<table >
  <tr>
    <th>状态值</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>1</td>
    <td>支付宝</td>
  </tr>

  <tr>
    <td>2</td>
    <td>微信支付</td>
  </tr>

  <tr>
    <td>3</td>
    <td>QQ钱包</td>
  </tr>

  <tr>
    <td>4</td>
    <td>银行卡</td>
  </tr>
</table>

