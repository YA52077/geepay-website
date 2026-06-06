---
description: GeePay API documentation.
---
<h1>Query Order</h1>

## Endpoint
<div class="tip custom-block" style="padding-top: 8px">https://pay.sc58.cn/api/pay/query</div>

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

## Payment Status List
<table><tr><th>Value</th><th>Description</th></tr><tr><td>0</td><td>Unpaid</td></tr><tr><td>1</td><td>Paid</td></tr><tr><td>2</td><td>Refunded</td></tr><tr><td>3</td><td>Frozen</td></tr><tr><td>4</td><td>Pre-authorization</td></tr></table>
