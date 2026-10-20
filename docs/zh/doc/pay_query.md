---
description: GeePay,支付宝免签约即时到账,财付通免签约,微信免签约支付,QQ钱包免签约,免签约支付。
---
<h1>订单查询</h1>

##  请求地址
<div class="tip custom-block" style="padding-top: 8px">

$PAY_URL/api/pay/query

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
    <td>失败时返回原因</td>
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
    <td><a href="paytype">支付方式列表</a></td>
  </tr>

  <tr>
    <td>支付状态</td>
    <td>status</td>
    <td>Int</td>
    <td>1</td>
    <td><a href="pay_query#支付状态列表">支付状态列表</a></td>
  </tr>

  <tr>
    <td>商户ID</td>
    <td>pid</td>
    <td>Int</td>
    <td>1000</td>
    <td></td>
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
    <td>3.00</td>
    <td>单位：元</td>
  </tr>

  <tr>
    <td>已退款金额</td>
    <td>refundmoney</td>
    <td>String</td>
    <td></td>
    <td>仅部分退款情况才返回</td>
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
    <td>支付用户IP</td>
    <td>clientip</td>
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

##  支付状态列表
<table>
  <tr>
    <th>状态值</th>
    <th>描述</th>
  </tr>

  <tr>
    <td>0</td>
    <td>未支付</td>
  </tr>

  <tr>
    <td>1</td>
    <td>已支付</td>
  </tr>

  <tr>
    <td>2</td>
    <td>已退款</td>
  </tr>

  <tr>
    <td>3</td>
    <td>已冻结</td>
  </tr>

  <tr>
    <td>4</td>
    <td>预授权</td>
  </tr>
</table>