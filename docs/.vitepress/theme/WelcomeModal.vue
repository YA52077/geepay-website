<template>
  <Transition name="welcome-fade">
    <div v-if="showModal" class="welcome-modal-overlay" @click="closeModal">
      <div class="welcome-modal-card" @click.stop>
        <!-- 顶部装饰光晕 -->
        <div class="modal-glow-halo"></div>

        <!-- 右上角关闭按钮 -->
        <button class="welcome-modal-close" @click="closeModal" aria-label="关闭弹窗" title="关闭">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- 头部品牌图标与标题 -->
        <div class="welcome-modal-header">
          <div class="modal-logo-wrap">
            <img class="modal-logo" src="/img/sc58.png" alt="GeePay Logo" />
            <span class="modal-logo-glow"></span>
          </div>
          <div class="modal-title-area">
            <span class="modal-badge">
              <span class="badge-sparkle">✨</span> 官方推荐
            </span>
            <h3 class="modal-title">欢迎访问 GeePay 系统</h3>
          </div>
        </div>

        <!-- 主体描述与特性标签 -->
        <div class="welcome-modal-body">
          <p class="modal-desc">
            GeePay系统（lxrr.cn）是行业领先的多端免签约支付平台，为开发者提供高并发、秒级到账的便捷支付接入方案。
          </p>

          <div class="modal-feature-chips">
            <span class="feature-chip">
              <span class="chip-dot dot-green"></span>
              免签约即时到账
            </span>
            <span class="feature-chip">
              <span class="chip-dot dot-amber"></span>
              高并发毫秒响应
            </span>
            <span class="feature-chip">
              <span class="chip-dot dot-blue"></span>
              全渠道聚合对接
            </span>
          </div>
        </div>

        <!-- 底部行动按钮 -->
        <div class="welcome-modal-footer">
          <a href="https://gitee.com/xzbaby_0" target="_blank" class="welcome-btn btn-gitee" rel="noopener" @click="recordShown">
            <svg class="btn-icon" viewBox="0 0 1024 1024" width="16" height="16" fill="currentColor">
              <path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.889h-290.745c-15.19 0-27.49 12.301-27.49 27.49v54.98c0 15.19 12.3 27.49 27.49 27.49h175.765c15.19 0 27.49 12.3 27.49 27.49v13.746c0 60.771-49.267 110.037-110.037 110.037H388.75c-15.19 0-27.49-12.3-27.49-27.49V388.75c0-15.19 12.3-27.49 27.49-27.49h382.399c15.19 0 27.49-12.3 27.49-27.49v-54.98c0-15.19-12.3-27.49-27.49-27.49H388.75c-75.968 0-137.523 61.555-137.523 137.523v329.88c0 75.968 61.555 137.524 137.523 137.524h219.92c106.35 0 192.449-86.098 192.449-192.449v-145.47c0-15.19-12.3-27.49-27.49-27.49z"/>
            </svg>
            <span>Gitee 点星</span>
          </a>
          <a href="https://github.com/YA52077" target="_blank" class="welcome-btn btn-github" rel="noopener" @click="recordShown">
            <svg class="btn-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>GitHub Star</span>
          </a>
        </div>

        <!-- 快捷关闭文本 -->
        <button class="welcome-dismiss-action" @click="closeModal">
          进入官网浏览
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showModal = ref(false)

const closeModal = () => {
  showModal.value = false
  try {
    localStorage.setItem('geepay_welcome_shown', 'true')
  } catch (e) {}
}

const recordShown = () => {
  try {
    localStorage.setItem('geepay_welcome_shown', 'true')
  } catch (e) {}
}

onMounted(() => {
  try {
    const hasShown = localStorage.getItem('geepay_welcome_shown')
    if (!hasShown) {
      // 首次进入时平滑弹出
      setTimeout(() => {
        showModal.value = true
      }, 300)
    }
  } catch (e) {
    // 兼容可能禁用 localStorage 的无痕模式
  }
})
</script>

<style scoped>
/* 遮罩背景 */
.welcome-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.48);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 9999;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* 弹窗卡片本体 */
.welcome-modal-card {
  position: relative;
  width: min(92vw, 440px);
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  box-shadow: 
    0 24px 60px -12px rgba(15, 23, 42, 0.22),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 32px 28px 24px;
  text-align: center;
  overflow: hidden;
  box-sizing: border-box;
}

/* 顶部环境光晕 */
.modal-glow-halo {
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 193, 7, 0.22), rgba(76, 175, 80, 0.12) 60%, transparent 80%);
  pointer-events: none;
  filter: blur(24px);
}

/* 关闭按钮 */
.welcome-modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(203, 213, 225, 0.6);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 2;
}

.welcome-modal-close:hover {
  background: #f1f5f9;
  color: #0f172a;
  transform: rotate(90deg) scale(1.05);
  border-color: #cbd5e1;
}

/* 头部样式 */
.welcome-modal-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 1;
}

.modal-logo-wrap {
  position: relative;
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(241, 245, 249, 0.8));
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 24px rgba(76, 175, 80, 0.18);
}

.modal-logo {
  width: 38px;
  height: 38px;
  object-fit: contain;
  border-radius: 10px;
}

.modal-logo-glow {
  position: absolute;
  inset: -2px;
  border-radius: 20px;
  border: 2px solid rgba(255, 193, 7, 0.35);
  pointer-events: none;
}

.modal-title-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.modal-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(255, 193, 7, 0.15);
  border: 1px solid rgba(255, 193, 7, 0.3);
  color: #92400e;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.modal-title {
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

/* 主体样式 */
.welcome-modal-body {
  margin-top: 16px;
  position: relative;
  z-index: 1;
}

.modal-desc {
  margin: 0 0 16px 0;
  font-size: 14px;
  line-height: 1.68;
  color: #475569;
  font-weight: normal;
}

/* 特性胶囊条 */
.modal-feature-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 22px;
}

.feature-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  color: #334155;
  background: rgba(241, 245, 249, 0.85);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.chip-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.dot-green {
  background: #10b981;
  box-shadow: 0 0 6px rgba(16, 185, 129, 0.5);
}

.dot-amber {
  background: #f59e0b;
  box-shadow: 0 0 6px rgba(245, 158, 11, 0.5);
}

.dot-blue {
  background: #3b82f6;
  box-shadow: 0 0 6px rgba(59, 130, 246, 0.5);
}

/* 底部按钮区域 */
.welcome-modal-footer {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.welcome-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none !important;
  color: #ffffff !important;
  transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
}

.btn-icon {
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.welcome-btn:hover .btn-icon {
  transform: scale(1.15);
}

/* Gitee 按钮 */
.btn-gitee {
  background: linear-gradient(135deg, #da121a 0%, #b80f16 100%);
  box-shadow: 0 6px 18px rgba(218, 18, 26, 0.28);
}

.btn-gitee:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(218, 18, 26, 0.38);
  background: linear-gradient(135deg, #e51720 0%, #c41017 100%);
}

/* GitHub 按钮 */
.btn-github {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.22);
}

.btn-github:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.32);
  background: linear-gradient(135deg, #334155 0%, #1e293b 100%);
}

/* 快捷跳过/进入链接 */
.welcome-dismiss-action {
  display: inline-block;
  margin-top: 16px;
  background: none;
  border: none;
  padding: 4px 10px;
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 6px;
}

.welcome-dismiss-action:hover {
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.08);
}

/* ============================================================
   暗黑模式适配
   ============================================================ */

.dark .welcome-modal-overlay {
  background: rgba(0, 0, 0, 0.68);
}

.dark .welcome-modal-card {
  background: rgba(24, 32, 47, 0.95);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 24px 60px -12px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.08);
}

.dark .modal-glow-halo {
  background: radial-gradient(circle, rgba(255, 193, 7, 0.28), rgba(76, 175, 80, 0.18) 60%, transparent 80%);
}

.dark .welcome-modal-close {
  background: rgba(30, 41, 59, 0.8);
  border-color: rgba(255, 255, 255, 0.12);
  color: #94a3b8;
}

.dark .welcome-modal-close:hover {
  background: rgba(51, 65, 85, 0.9);
  color: #f8fafc;
  border-color: rgba(255, 255, 255, 0.2);
}

.dark .modal-logo-wrap {
  background: rgba(30, 41, 59, 0.85);
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

.dark .modal-badge {
  background: rgba(255, 193, 7, 0.16);
  border-color: rgba(255, 193, 7, 0.25);
  color: #fde68a;
}

.dark .modal-title {
  color: #f8fafc;
}

.dark .modal-desc {
  color: #94a3b8;
}

.dark .feature-chip {
  color: #cbd5e1;
  background: rgba(30, 41, 59, 0.7);
  border-color: rgba(255, 255, 255, 0.08);
}

.dark .btn-github {
  background: linear-gradient(135deg, #334155 0%, #1e293b 100%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
}

.dark .btn-github:hover {
  background: linear-gradient(135deg, #475569 0%, #334155 100%);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
}

.dark .welcome-dismiss-action {
  color: #94a3b8;
}

.dark .welcome-dismiss-action:hover {
  color: #fbbf24;
  background: rgba(251, 191, 36, 0.1);
}

/* ============================================================
   进出场平滑动画
   ============================================================ */

.welcome-fade-enter-active,
.welcome-fade-leave-active {
  transition: opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.welcome-fade-enter-active .welcome-modal-card,
.welcome-fade-leave-active .welcome-modal-card {
  transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.welcome-fade-enter-from,
.welcome-fade-leave-to {
  opacity: 0;
}

.welcome-fade-enter-from .welcome-modal-card {
  opacity: 0;
  transform: scale(0.92) translateY(12px);
}

.welcome-fade-leave-to .welcome-modal-card {
  opacity: 0;
  transform: scale(0.96) translateY(-8px);
}

@media (max-width: 480px) {
  .welcome-modal-card {
    padding: 28px 20px 20px;
    border-radius: 20px;
  }
  .welcome-modal-footer {
    flex-direction: column;
    gap: 10px;
  }
  .welcome-btn {
    width: 100%;
  }
}
</style>