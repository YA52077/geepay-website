---
description: GeePay API signature and verification rules.
---

<h1>Signature Rules</h1>

## Signing Steps

<div class="tip custom-block" style="padding-top: 8px">
Requests sent to this platform must be signed.

- Collect all non-empty request parameters except array and byte-stream parameters such as files. Remove the sign and sign_type fields, then sort parameters in ascending ASCII order by key.
- Combine the sorted parameters as key=value pairs and join them with the & character. The generated string is the string to be signed.
- Use the merchant private key to calculate the RSA signature (SHA256WithRSA) for the string to be signed. The result is the sign value.
</div>

## Signature Verification Steps

<div class="tip custom-block" style="padding-top: 8px">
API responses and asynchronous notification callbacks must be verified.

- Follow steps 1 and 2 of the signing process to get the string to be signed.
- Use the platform public key to verify the RSA signature (SHA256WithRSA) against the sign value.
</div>

## Notes
<div class="tip custom-block" style="padding-top: 8px">

- The merchant private key must be configured in your code for signing. Keep it safe and never disclose it.
- The platform public key is used to verify API responses and asynchronous notification callbacks.
- Download the SDK to view sample code for the payment flow.

</div>
