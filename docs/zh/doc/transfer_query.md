---
description: GeePay,支付宝免签约即时到账,财付通免签约,微信免签约支付,QQ钱包免签约,免签约支付。
---

<h1>转账查询</h1>

## 

<div class="tip custom-block" style="padding-top: 8px">

https://pay.sc58.cn/api/transfer/query

</div>

## 请求地址

<div class="tip custom-block" style="padding-top: 8px">

POST

</div>

## 请求参数说明

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
    <td>1001</td>
    <td></td>
  </tr>

  <tr>
    <td>系统交易号</td>
    <td>biz_no</td>
    <td>否</td>
    <td>String</td>
    <td>2016080615134334919</td>
    <td>与商户交易号必传其一</td>
  </tr>

  <tr>
    <td>商户交易号</td>
    <td>out_biz_no</td>
    <td>否</td>
    <td>String</td>
    <td>2016080615134334919</td>
    <td>与系统交易号必传其一</td>
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

<table>
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
    <td>成功或失败时返回提示</td>
  </tr>

  <tr>
    <td>转账状态</td>
    <td>status</td>
    <td>Int</td>
    <td></td>
    <td>
    0：正在处理
    1：转账成功
    2：转账失败
    </td>
  </tr>

  <tr>
    <td>转账失败原因</td>
    <td>errmsg</td>
    <td>String</td>
    <td>收款方账户异常</td>
    <td>status=2 时才返回</td>
  </tr>

   <tr>
    <td>系统交易号</td>
    <td>biz_no</td>
    <td>String</td>
    <td>2016080615134334917</td>
    <td></td>
  </tr>

   <tr>
    <td>商户交易号</td>
    <td>out_biz_no</td>
    <td>String</td>
    <td>2016080615134334917</td>
    <td></td>
  </tr>

   <tr>
    <td>接口转账单号</td>
    <td>orderid</td>
    <td>String</td>
    <td>40001283951815782</td>
    <td>支付宝微信返回的转账单号</td>
  </tr>

   <tr>
    <td>转账完成时间</td>
    <td>paydate</td>
    <td>String</td>
    <td>2016-08-06 15:14:00</td>
    <td>转账完成时间，格式为yyyy-MM-dd HH:mm:ss</td>
  </tr>

   <tr>
    <td>转账金额</td>
    <td>amount</td>
    <td>String</td>
    <td>100.00</td>
    <td>单位：元</td>
  </tr>

   <tr>
    <td>转账花费金额</td>
    <td>cost_money</td>
    <td>String</td>
    <td></td>
    <td>从商户可用余额扣减的金额</td>
  </tr>

   <tr>
    <td>转账备注</td>
    <td>remark</td>
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

