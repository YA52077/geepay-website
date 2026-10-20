---
description: GeePay API documentation.
---
<h1>Create Payment Order</h1>

<div class="tip custom-block" style="padding-top: 8px">This API is used by the server backend to initiate a payment request. It returns a payment QR code link, redirect URL or other launch parameters.</div>

## Endpoint
<div class="tip custom-block" style="padding-top: 8px">$PAY_URL/api/pay/create</div>

## Request Method
<div class="tip custom-block" style="padding-top: 8px">POST</div>

## Request Parameters
<table>
<tr><th>Field</th><th>Parameter</th><th>Required</th><th>Type</th><th>Example</th><th>Description</th></tr>
<tr><td>Merchant ID</td><td>pid</td><td>Yes</td><td>Int</td><td>1000</td><td>Your merchant ID</td></tr>
<tr><td>Timestamp</td><td>timestamp</td><td>Yes</td><td>String</td><td>1721206072</td><td>10-digit Unix timestamp in seconds</td></tr>
<tr><td>Signature</td><td>sign</td><td>Yes</td><td>String</td><td></td><td>See Signature Rules</td></tr>
<tr><td>Signature Type</td><td>sign_type</td><td>Yes</td><td>String</td><td>RSA</td><td>Defaults to RSA</td></tr>
</table>

## Response Parameters
<table>
<tr><th>Field</th><th>Parameter</th><th>Type</th><th>Example</th><th>Description</th></tr>
<tr><td>Response Code</td><td>code</td><td>Int</td><td>0</td><td>0 means success, other values mean failure</td></tr>
<tr><td>Message</td><td>msg</td><td>String</td><td></td><td>Returned on success or failure</td></tr>
<tr><td>Timestamp</td><td>timestamp</td><td>String</td><td>1721206072</td><td>10-digit Unix timestamp in seconds</td></tr>
<tr><td>Signature</td><td>sign</td><td>String</td><td></td><td>Response signature</td></tr>
<tr><td>Signature Type</td><td>sign_type</td><td>String</td><td>RSA</td><td>Defaults to RSA</td></tr>
</table>

## Response Example
```json
{
  "code": 0,
  "trade_no": "20160806151343349",
  "pay_type": "qrcode",
  "pay_info": "weixin://wxpay/bizpayurl?pr=04IPMKM"
}
```

## API Type List
<table><tr><th>Value</th><th>Description</th></tr><tr><td>web</td><td>Generic web payment</td></tr><tr><td>jump</td><td>Redirect payment</td></tr><tr><td>jsapi</td><td>JSAPI payment</td></tr><tr><td>app</td><td>APP payment</td></tr><tr><td>scan</td><td>Payment-code scan payment</td></tr><tr><td>applet</td><td>Mini program payment</td></tr></table>

## Device Type List
<table><tr><th>Value</th><th>Description</th></tr><tr><td>pc</td><td>Desktop browser</td></tr><tr><td>mobile</td><td>Mobile browser</td></tr><tr><td>qq</td><td>Mobile QQ browser</td></tr><tr><td>wechat</td><td>WeChat browser</td></tr><tr><td>alipay</td><td>Alipay client</td></tr></table>

## Payment Launch Type Description
<table><tr><th>Value</th><th>Description</th></tr><tr><td>jump</td><td>Payment redirect URL</td></tr><tr><td>html</td><td>HTML code for payment redirect</td></tr><tr><td>qrcode</td><td>Payment QR code</td></tr><tr><td>urlscheme</td><td>Mini program URL scheme</td></tr><tr><td>jsapi</td><td>JSAPI payment parameters</td></tr><tr><td>app</td><td>APP payment parameters</td></tr><tr><td>scan</td><td>Payment order information after code scan payment</td></tr></table>
