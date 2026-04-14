---
description: GeePay,支付宝免签约即时到账,财付通免签约,微信免签约支付,QQ钱包免签约,免签约支付。
---
<h1>页面跳转支付</h1>

<div class="tip custom-block" style="padding-top: 8px">

此接口可用于用户前台直接发起支付，使用form表单跳转或拼接成url跳转。

</div>

##  请求地址
<div class="tip custom-block" style="padding-top: 8px">

https://pay.sc58.cn/api/pay/submit

</div>

##  请求方式
<div class="tip custom-block" style="padding-top: 8px">

POST 或 GET（推荐POST，不容易被劫持）

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
    <td>支付方式</td>
    <td>type</td>
    <td>是</td>
    <td>String</td>
    <td>alipay</td>
    <td><a href="paytype">支付方式列表</a></td>
  </tr>

   <tr>
    <td>商户订单号</td>
    <td>out_trade_no</td>
    <td>是</td>
    <td>String</td>
    <td>20160806151343349</td>
    <td></td>
  </tr>

  <tr>
    <td>异步通知地址</td>
    <td>notify_url</td>
    <td>是</td>
    <td>String</td>
    <td>https://pay.sc58.cn/notify_url.php</td>
    <td>服务器异步通知地址</td>
  </tr>

  <tr>
    <td>跳转通知地址</td>
    <td>return_url</td>
    <td>是</td>
    <td>String</td>
    <td>https://pay.sc58.cn/return_url.php</td>
    <td>页面跳转通知地址</td>
  </tr>

  <tr>
    <td>商品名称</td>
    <td>name</td>
    <td>是</td>
    <td>String</td>
    <td>VIP会员</td>
    <td>如超过127个字节会自动截取</td>
  </tr>

  <tr>
    <td>商品金额</td>
    <td>money</td>
    <td>是</td>
    <td>String</td>
    <td>10.00</td>
    <td>单位：元，最大2位小数</td>
  </tr>

   <tr>
    <td>业务扩展参数</td>
    <td>param</td>
    <td>否</td>
    <td>String</td>
    <td>没有请留空</td>
    <td>支付后原样返回数</td>
  </tr>

   <tr>
    <td>自定义通道ID</td>
    <td>channel_id</td>
    <td>否</td>
    <td>Int</td>
    <td></td>
    <td>对应进件商户列表的ID，未进件请勿传</td>
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
    <td>错误信息</td>
    <td>msg</td>
    <td>String</td>
    <td></td>
    <td>失败时返回提示</td>
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
    <td>商户订单号</td>
    <td>out_trade_no</td>
    <td>String</td>
    <td>20160806151343351</td>
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
    <td>退款状态</td>
    <td>status</td>
    <td>Int</td>
    <td></td>
    <td>0：失败，1：成功</td>
  </tr>

   <tr>
    <td>退款时间</td>
    <td>addtime</td>
    <td>String</td>
    <td>2024-07-01 16:47:32</td>
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

- 支付方式（type）不传会跳转到收银台支付

</div>