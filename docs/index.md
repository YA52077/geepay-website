---
layout: false
head:
  - - meta
    - http-equiv: refresh
      content: 0; url=/zh/
---

<script setup>
import { inBrowser } from 'vitepress'

if (inBrowser) {
  window.location.replace('/zh/' + window.location.search + window.location.hash)
}
</script>

