---
description: GeePay,支付宝免签约即时到账,财付通免签约,微信免签约支付,QQ钱包免签约,免签约支付。
---
<h1>转账发起</h1>

## 

<div class="tip custom-block" style="padding-top: 8px">

平台需开通代付功能，且在商户后台开启代付API接口开关，才能调用本接口发起转账

</div>




# 请求地址

<div class="tip custom-block" style="padding-top: 8px">

$PAY_URL/api/transfer/submit

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
    <td>转账方式</td>
    <td>type</td>
    <td>是</td>
    <td>String</td>
    <td>alipay</td>
    <td><a href="transfer_submit#转账方式列表">转账方式列表</a></td>
  </tr>

   <tr>
    <td>收款方账号</td>
    <td>account</td>
    <td>是</td>
    <td>String</td>
    <td>alipay@alipay.com</td>
    <td>支付宝账号/微信OpenId/银行卡号</td>
  </tr>

<tr>
    <td>收款方姓名</td>
    <td>name</td>
    <td>否</td>
    <td>String</td>
    <td>张三</td>
    <td>选填，传入则校验账号与该姓名是否匹配</td>
  </tr>


  <tr>
    <td>转账金额</td>
    <td>money</td>
    <td>是</td>
    <td>String</td>
    <td>1.00</td>
    <td>单位：元</td>
  </tr>

  <tr>
    <td>转账备注</td>
    <td>remark</td>
    <td>否</td>
    <td>String</td>
    <td></td>
    <td>选填</td>
  </tr>

  <tr>
    <td>转账交易号</td>
    <td>out_biz_no</td>
    <td>否</td>
    <td>String</td>
    <td>2016080615134334917</td>
    <td>传入后可避免出现重复请求转账</td>
  </tr>

  <tr>
    <td>安全发账本ID</td>
    <td>bookid</td>
    <td>否</td>
    <td>String</td>
    <td></td>
    <td>仅支付宝安全发转账可以传入</td>
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
    <td>错误信息</td>
    <td>msg</td>
    <td>String</td>
    <td></td>
    <td>失败时返回转账失败原因</td>
  </tr>

  <tr>
    <td>转账状态</td>
    <td>status</td>
    <td>Int</td>
    <td></td>
    <td>
    0：正在处理
    1：转账成功
    </td>
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
    <td>可用于后续转账查询</td>
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
    <td>2024-07-01 16:47:32</td>
    <td></td>
  </tr>

  <tr>
    <td>转账花费金额</td>
    <td>cost_money</td>
    <td>String</td>
    <td>100.00</td>
    <td>从商户可用余额扣减的金额</td>
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

## 转账方式列表
<table >
  <tr>
    <th>状态值</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>alipay</td>
    <td>支付宝</td>
  </tr>

  <tr>
    <td>wxpay</td>
    <td>微信支付</td>
  </tr>

  <tr>
    <td>qqpay</td>
    <td>QQ钱包</td>
  </tr>

  <tr>
    <td>bank</td>
    <td>银行卡</td>
  </tr>
</table>

## 其他说明
<div class="tip custom-block" style="padding-top: 8px">

- 如果返回的转账状态status=0，则需稍后调用转账查询接口查询转账状态。

</div>

