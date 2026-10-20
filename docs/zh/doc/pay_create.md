---
description: GeePay,支付宝免签约即时到账,财付通免签约,微信免签约支付,QQ钱包免签约,免签约支付。
---
<h1>统一下单接口</h1>

<div class="tip custom-block" style="padding-top: 8px">

此接口可用于服务器后端发起支付请求，会返回支付二维码链接、支付跳转url等。

</div>

##  请求地址
<div class="tip custom-block" style="padding-top: 8px">

$PAY_URL/api/pay/create

</div>

##  请求方式
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
    <td>1000</td>
    <td>商户ID</td>
  </tr>

  <tr>
    <td>接口类型</td>
    <td>method</td>
    <td>是</td>
    <td>String</td>
    <td>web</td>
    <td><a href="pay_create#接口类型列表">接口类型列表</a></td>
  </tr>

  <tr>
    <td>设备类型</td>
    <td>device</td>
    <td>否</td>
    <td>String</td>
    <td>pc</td>
    <td>仅通用网页支付需要传 <a href="pay_create#设备类型列表">设备类型列表</a></td>
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
    <td>$PAY_URL/notify_url.php</td>
    <td>服务器异步通知地址</td>
  </tr>

  <tr>
    <td>跳转通知地址</td>
    <td>return_url</td>
    <td>是</td>
    <td>String</td>
    <td>$PAY_URL/return_url.php</td>
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
    <td>1.00</td>
    <td>单位：元，最大2位小数</td>
  </tr>

  <tr>
    <td>用户IP地址</td>
    <td>clientip</td>
    <td>是</td>
    <td>String</td>
    <td>192.168.1.100</td>
    <td>用户发起支付的IP地址</td>
  </tr>

  <tr>
    <td>业务扩展参数</td>
    <td>param</td>
    <td>否</td>
    <td>String</td>
    <td>没有请留空</td>
    <td>支付后原样返回</td>
  </tr>

  <tr>
    <td>被扫支付授权码</td>
    <td>auth_code</td>
    <td>否</td>
    <td>String</td>
    <td></td>
    <td>仅被扫支付需要传</td>
  </tr>

  <tr>
    <td>用户Openid</td>
    <td>sub_openid</td>
    <td>否</td>
    <td>String</td>
    <td></td>
    <td>仅JSAPI支付需要传</td>
  </tr>

  <tr>
    <td>公众号AppId</td>
    <td>sub_appid</td>
    <td>否</td>
    <td>String</td>
    <td></td>
    <td>仅JSAPI支付需要传</td>
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
    <td>失败时返回原因</td>
  </tr>

  <tr>
    <td>平台订单号</td>
    <td>trade_no</td>
    <td>String</td>
    <td>20160806151343349</td>
    <td>平台内部的订单号</td>
  </tr>

  <tr>
    <td>发起支付类型</td>
    <td>pay_type</td>
    <td>String</td>
    <td>jump</td>
    <td>参考 <a href= "pay_create#发起支付类型说明">发起支付类型说明</a></td>
  </tr>

  <tr>
    <td>发起支付参数</td>
    <td>pay_info</td>
    <td>String</td>
    <td>weixin://wxpay/bizpayurl?pr=04IPMKM</td>
    <td>根据不同的发起支付类型，返回内容也不一样</td>
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

## 返回示例

```md
{
    "code": 0,
    "trade_no": "20160806151343349",
    "pay_type": "qrcode",
    "pay_info": "weixin://wxpay/bizpayurl?pr=04IPMKM"
}
```

```md
{
    "code": 0,
    "trade_no": "20160806151343351",
    "pay_type": "jsapi",
    "pay_info": {"appId":"wx2421b1c4370ec43b","timeStamp":"1395712654","nonceStr":"e61463f8efa94090b1f366cccfbbb444","package":prepay_id=up_wx21201855730335ac86f8c43d1889123400","signType":"RSA","paySign":"oR9d8PuhnIc+YZ8cBHFCwfgpaK9gd7vaRvkYD7rthRAZ"}
}
```

```md
{
    "code": 0,
    "trade_no": "2024072320222180092",
    "pay_type": "scan",
    "pay_info": {"type":"wxpay","trade_no":"2024072320222180092","api_trade_no":"4200002345202407238253501450","buyer":"o9uAcc6VlZxhcujpKIqQuWWoDQc","money":"1.00"}
}
```

```md
{
    "code": 0,
    "trade_no": "2024072320222180018",
    "pay_type": "wxplugin",
    "pay_info": {"appId":"wxc237fd59fbb634ae","supplierId":"123456","shopId":"123456","orderId":"2024072320222180092"}
}
```

```md
{
    "code": 0,
    "trade_no": "2024072320222180018",
    "pay_type": "wxapp",
    "pay_info": {"appId":"wxbb48bac536053072","miniProgramId":"gh_bf9cd8cf50b5","path":"pages/fromAppPay/index?orderid=123456","extraData":""}
}
```

##  接口类型列表

<table>
  <tr>
    <th>调用值</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>web</td>
    <td>通用网页支付（会根据device判断，自动返回跳转url/二维码/小程序跳转url等）</td>
  </tr>
  <tr>
    <td>jump</td>
    <td>跳转支付（仅会返回跳转url）</td>
  </tr>
  <tr>
    <td>jsapi</td>
    <td>JSAPI支付（小程序内支付使用，仅返回JSAPI参数，需传入sub_openid和sub_appid参数）</td>
  </tr>
  <tr>
    <td>app</td>
    <td>APP支付（iOS/安卓APP内支付使用，仅返回APP支付参数，或APP拉起微信小程序参数）</td>
  </tr>
  <tr>
    <td>scan</td>
    <td>付款码支付（需传入auth_code参数，支付成功后返回订单信息）</td>
  </tr>

  <tr>
    <td>applet</td>
    <td>小程序支付（微信小程序内使用，返回微信小程序插件参数或跳转小程序参数）</td>
  </tr>
</table>

##  设备类型列表

<table>
  <tr>
    <th>调用值</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>pc</td>
    <td>电脑浏览器（默认）</td>
  </tr>
  <tr>
    <td>mobile</td>
    <td>手机浏览器</td>
  </tr>
  <tr>
    <td>qq</td>
    <td>手机QQ内浏览器</td>
  </tr>
  <tr>
    <td>wechat</td>
    <td>微信内浏览器</td>
  </tr>
  <tr>
    <td>alipay</td>
    <td>支付宝客户端</td>
  </tr>
</table>

##  发起支付类型说明

<table>
  <tr>
    <th>调用值</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>jump</td>
    <td>返回支付跳转url</td>
  </tr>
  <tr>
    <td>html</td>
    <td>返回html代码，用于支付跳转</td>
  </tr>
  <tr>
    <td>qrcode</td>
    <td>返回支付二维码</td>
  </tr>
  <tr>
    <td>urlscheme</td>
    <td>返回微信/支付宝小程序跳转url scheme</td>
  </tr>
  <tr>
    <td>jsapi</td>
    <td>返回用于发起JSAPI支付的参数</td>
  </tr>
  <tr>
    <td>app</td>
    <td>返回用于发起APP支付的参数</td>
  </tr>
  <tr>
    <td>scan</td>
    <td>付款码支付成功,返回支付订单信息</td>
  </tr>
  <tr>
    <td>wxplugin</td>
    <td>返回要拉起的微信小程序插件参数，用于未开通支付能力的小程序发起支付。</td>
  </tr>
  <tr>
    <td>wxapp</td>
    <td>返回要拉起的微信小程序和路径，用于APP内拉起微信小程序支付</td>
  </tr>
</table>


##  其他说明
<div class="tip custom-block" style="padding-top: 8px">

- 代码中需根据接口返回的pay_type值来展示具体的支付页面，例如扫码页面等。如果不懂怎么展示支付页面，可在method传入jump，这样pay_type就只会返回jump，直接跳转支付即可。
- 付款码支付可不传支付类型type字段，会根据auth_code的数字自动判断支付类型。
- 微信小程序插件支付，不同支付平台拉起支付方式不一样，可联系客服获取对接小程序插件的文档。
- APP拉起微信小程序可参考微信官方文档。

</div>