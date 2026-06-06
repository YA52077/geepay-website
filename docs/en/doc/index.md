---
description: GeePay API overview and integration rules.
---
<h1>API Overview</h1>

## Protocol Rules

<div class="tip custom-block" style="padding-top: 8px">

Request data format: application/x-www-form-urlencoded

Response data format: JSON

Character encoding: UTF-8

Signature algorithm: SHA256WithRSA

</div>

## V2 Upgrade Notes

<div class="tip custom-block" style="padding-top: 8px">

- V2 APIs use the RSA signature algorithm. V1 APIs use the MD5 signature algorithm.
- V2 APIs use new endpoint URLs and support refunds, transfers and more. V1 APIs use submit.php and mapi.php to submit orders.
- V2 APIs add the timestamp parameter in requests and responses for timestamp validation.

</div>

## Get an RSA Key Pair

<div class="tip custom-block" style="padding-top: 8px">

In the merchant dashboard, open Profile -> API Information and click Generate Merchant RSA Key Pair. Save the merchant private key carefully. You only need the platform public key and the merchant private key when integrating APIs.

</div>

## Legacy API Documentation
<div class="tip custom-block" style="padding-top: 8px">

[View V1 legacy API documentation](https://pay.sc58.cn/doc_old.html)

</div>
