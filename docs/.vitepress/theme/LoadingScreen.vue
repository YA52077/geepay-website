<template>
  <div class="loading-screen">
    <div class="loading-screen__bg loading-screen__bg--left"></div>
    <div class="loading-screen__bg loading-screen__bg--right"></div>

    <main class="loading-card">
      <div class="loading-card__halo"></div>

      <div class="loading-brand">
        <div class="loading-brand__logo-wrap">
          <span class="loading-brand__ring"></span>
          <img class="loading-brand__logo" src="/img/sc58.png" alt="GeePay logo" />
        </div>
        <span class="loading-brand__badge">GeePay</span>
      </div>

      <h1 class="loading-card__title">正在加载</h1>

      <div class="loading-progress" aria-hidden="true">
        <span class="loading-progress__bar" :style="{ width: `${progress}%` }"></span>
      </div>

      <div class="loading-meta">
        <span>{{ statusText }}</span>
        <strong>{{ progress }}%</strong>
      </div>

      <div class="loading-actions">
        <a class="loading-actions__button loading-actions__button--primary" href="/zh/">
          进入中文
        </a>
        <a class="loading-actions__button loading-actions__button--secondary" href="/en/">
          English
        </a>
      </div>

      <p class="loading-tip">
        如未自动跳转，请点击上方按钮继续。
      </p>
    </main>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const targetHref = '/zh/'
const redirectDelay = 2200
const progress = ref(0)

let progressTimer = 0
let redirectTimer = 0

const statusText = computed(() => {
  if (progress.value >= 100) {
    return '正在进入 GeePay 文档中心… / Entering GeePay Docs…'
  }

  return '默认即将跳转到简体中文，你也可以手动选择语言。'
})

onMounted(() => {
  const startedAt = performance.now()

  progressTimer = window.setInterval(() => {
    const elapsed = performance.now() - startedAt
    progress.value = Math.min(100, Math.round((elapsed / redirectDelay) * 100))
  }, 80)

  redirectTimer = window.setTimeout(() => {
    progress.value = 100
    window.location.replace(targetHref)
  }, redirectDelay)
})

onBeforeUnmount(() => {
  if (progressTimer) {
    window.clearInterval(progressTimer)
  }

  if (redirectTimer) {
    window.clearTimeout(redirectTimer)
  }
})
</script>

<style scoped>
.loading-screen {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
  background:
    radial-gradient(circle at top, rgba(255, 193, 7, 0.22), transparent 32%),
    linear-gradient(135deg, #f8fafc 0%, #eef6ef 48%, #fdf8e5 100%);
}

.loading-screen__bg {
  position: absolute;
  border-radius: 999px;
  filter: blur(12px);
  opacity: 0.7;
  animation: floatBlob 10s ease-in-out infinite;
}

.loading-screen__bg--left {
  width: 280px;
  height: 280px;
  left: -90px;
  top: 10%;
  background: rgba(76, 175, 80, 0.18);
}

.loading-screen__bg--right {
  width: 360px;
  height: 360px;
  right: -120px;
  bottom: -40px;
  background: rgba(255, 193, 7, 0.2);
  animation-delay: -3s;
}

.loading-card {
  position: relative;
  width: min(100%, 560px);
  padding: 40px 32px 28px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(18px);
  text-align: center;
  z-index: 1;
}

.loading-card__halo {
  position: absolute;
  inset: auto 50% -120px;
  width: 260px;
  height: 260px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 193, 7, 0.24), transparent 68%);
  pointer-events: none;
}

.loading-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.loading-brand__logo-wrap {
  position: relative;
  display: grid;
  place-items: center;
  width: 112px;
  height: 112px;
}

.loading-brand__ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(76, 175, 80, 0.18);
  border-top-color: #4caf50;
  border-right-color: #ffc107;
  animation: spin 1.4s linear infinite;
}

.loading-brand__logo {
  width: 72px;
  height: 72px;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(76, 175, 80, 0.18);
  animation: pulse 2.1s ease-in-out infinite;
}

.loading-brand__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 193, 7, 0.14);
  color: #7a5a00;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.loading-card__title {
  margin: 26px 0 10px;
  font-size: clamp(28px, 5vw, 38px);
  line-height: 1.18;
  color: #0f172a;
}

.loading-card__subtitle {
  margin: 0;
  color: #475569;
  font-size: 15px;
  line-height: 1.7;
}

.loading-progress {
  width: 100%;
  height: 10px;
  margin-top: 28px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(148, 163, 184, 0.18);
}

.loading-progress__bar {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #4caf50 0%, #ffc107 100%);
  box-shadow: 0 0 18px rgba(255, 193, 7, 0.35);
  transition: width 0.12s linear;
}

.loading-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 14px;
  color: #475569;
  font-size: 14px;
  text-align: left;
}

.loading-meta strong {
  color: #0f172a;
  font-size: 18px;
}

.loading-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  margin-top: 28px;
}

.loading-actions__button {
  min-width: 148px;
  padding: 12px 18px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 700;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;
}

.loading-actions__button:hover {
  transform: translateY(-2px);
}

.loading-actions__button--primary {
  background: linear-gradient(135deg, #ffc107, #ffb300);
  color: #111827;
  box-shadow: 0 12px 30px rgba(255, 193, 7, 0.28);
}

.loading-actions__button--secondary {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.25);
  color: #0f172a;
}

.loading-tip {
  margin: 22px 0 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.7;
}

.dark .loading-screen {
  background:
    radial-gradient(circle at top, rgba(255, 193, 7, 0.16), transparent 30%),
    linear-gradient(135deg, #0f172a 0%, #101a12 48%, #1d1704 100%);
}

.dark .loading-screen__bg--left {
  background: rgba(76, 175, 80, 0.18);
}

.dark .loading-screen__bg--right {
  background: rgba(255, 193, 7, 0.14);
}

.dark .loading-card {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(15, 23, 42, 0.76);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
}

.dark .loading-brand__badge {
  background: rgba(255, 193, 7, 0.12);
  color: #fde68a;
}

.dark .loading-card__title,
.dark .loading-meta strong {
  color: #f8fafc;
}

.dark .loading-card__subtitle,
.dark .loading-meta,
.dark .loading-tip {
  color: #cbd5e1;
}

.dark .loading-progress {
  background: rgba(148, 163, 184, 0.12);
}

.dark .loading-actions__button--secondary {
  background: rgba(30, 41, 59, 0.82);
  border-color: rgba(148, 163, 184, 0.18);
  color: #f8fafc;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0.98);
  }
  50% {
    transform: scale(1.04);
  }
}

@keyframes floatBlob {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -18px, 0);
  }
}

@media (max-width: 640px) {
  .loading-card {
    padding: 32px 20px 24px;
    border-radius: 22px;
  }

  .loading-meta {
    flex-direction: column;
    align-items: flex-start;
  }

  .loading-actions {
    flex-direction: column;
  }

  .loading-actions__button {
    width: 100%;
  }
}
</style>
