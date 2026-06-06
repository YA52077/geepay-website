---
description: GeePay API documentation.
---
<h1>Payment Notification</h1>

## Notification Type
<div class="tip custom-block" style="padding-top: 8px">Server asynchronous notification (notify_url) and page redirect notification (return_url)</div>

## Request Method
<div class="tip custom-block" style="padding-top: 8px">GET</div>

## Request Parameters
<table><tr><th>Field</th><th>Parameter</th><th>Type</th><th>Example</th><th>Description</th></tr><tr><td>Merchant ID</td><td>pid</td><td>Int</td><td>1000</td><td></td></tr><tr><td>Platform Order No.</td><td>trade_no</td><td>String</td><td>20160806151343349</td><td></td></tr><tr><td>Merchant Order No.</td><td>out_trade_no</td><td>String</td><td>20160806151343351</td><td></td></tr><tr><td>Payment Method</td><td>type</td><td>String</td><td>alipay</td><td><a href="paytype">Payment Method List</a></td></tr><tr><td>Trade Status</td><td>trade_status</td><td>String</td><td>TRADE_SUCCESS</td><td>Fixed as TRADE_SUCCESS</td></tr><tr><td>Signature</td><td>sign</td><td>String</td><td></td><td>See Signature Rules</td></tr></table>

## Response Content
<div class="tip custom-block" style="padding-top: 8px">After receiving an asynchronous notification, return success to indicate that your server has received the order notification.</div>

## Notes
<div class="tip custom-block" style="padding-top: 8px">Verify the returned sign value and check whether trade_status equals TRADE_SUCCESS.</div>
