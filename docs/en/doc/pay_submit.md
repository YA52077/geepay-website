---
description: GeePay API documentation.
---
<h1>Redirect Payment</h1>

<div class="tip custom-block" style="padding-top: 8px">This API is used to initiate a frontend payment by submitting a form or redirecting to a generated URL.</div>

## Endpoint
<div class="tip custom-block" style="padding-top: 8px">$PAY_URL/api/pay/submit</div>

## Request Method
<div class="tip custom-block" style="padding-top: 8px">POST or GET. POST is recommended.</div>

## Request Parameters
<table>
<tr><th>Field</th><th>Parameter</th><th>Required</th><th>Type</th><th>Example</th><th>Description</th></tr>
<tr><td>Merchant ID</td><td>pid</td><td>Yes</td><td>Int</td><td>1000</td><td></td></tr>
<tr><td>Payment Method</td><td>type</td><td>Yes</td><td>String</td><td>alipay</td><td><a href="paytype">Payment Method List</a></td></tr>
<tr><td>Merchant Order No.</td><td>out_trade_no</td><td>Yes</td><td>String</td><td>20160806151343349</td><td></td></tr>
<tr><td>Notify URL</td><td>notify_url</td><td>Yes</td><td>String</td><td>$PAY_URL/notify_url.php</td><td>Server asynchronous notification URL</td></tr>
<tr><td>Return URL</td><td>return_url</td><td>Yes</td><td>String</td><td>$PAY_URL/return_url.php</td><td>Page redirect notification URL</td></tr>
<tr><td>Product Name</td><td>name</td><td>Yes</td><td>String</td><td>VIP Membership</td><td></td></tr>
<tr><td>Amount</td><td>money</td><td>Yes</td><td>String</td><td>10.00</td><td>Unit: CNY</td></tr>
<tr><td>Timestamp</td><td>timestamp</td><td>Yes</td><td>String</td><td>1721206072</td><td>10-digit Unix timestamp in seconds</td></tr>
<tr><td>Signature</td><td>sign</td><td>Yes</td><td>String</td><td></td><td>See Signature Rules</td></tr>
<tr><td>Signature Type</td><td>sign_type</td><td>Yes</td><td>String</td><td>RSA</td><td>Defaults to RSA</td></tr>
</table>

## Notes
<div class="tip custom-block" style="padding-top: 8px">If the payment method type is not passed, the user will be redirected to the cashier page.</div>
