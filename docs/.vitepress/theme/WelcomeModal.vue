<template>
  <div v-if="showModal" class="welcome-modal-overlay" @click="closeModal">
    <div class="welcome-modal-content" @click.stop>
      <div class="welcome-modal-header">
        <h3>🎉 欢迎访问GeePay系统</h3>
        <button class="welcome-modal-close" @click="closeModal">&times;</button>
      </div>
      <div class="welcome-modal-body">
        <p>GeePay系统（SC58）行业领先的免签约支付平台！为开发者提供简单、易用的支付解决方案。</p>
      </div>
      <div class="welcome-modal-footer">
        <a href="https://gitee.com/xzbaby_0" target="_blank" class="welcome-modal-button gitee">
          Gitee Star
        </a>
        <a href="https://gitee.com/xzbaby_0" target="_blank" class="welcome-modal-button github">
          GitHub Star
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showModal = ref(false)

const closeModal = () => {
  showModal.value = false
  localStorage.setItem('geepay_welcome_shown', 'true')
}

onMounted(() => {
  const hasShown = localStorage.getItem('geepay_welcome_shown')
  if (!hasShown) {
    setTimeout(() => {
      showModal.value = false
    }, 1000)
  }
})
</script>

<style scoped>
.welcome-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(2px);
}

.welcome-modal-content {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 400px;
  overflow: hidden;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.welcome-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #e8e8e8;
}

.welcome-modal-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #FFC107;
}

.welcome-modal-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;
}

.welcome-modal-close:hover {
  background-color: #f0f0f0;
  color: #666;
}

.welcome-modal-body {
  padding: 20px 55px 20px 55px;
  line-height: 1.6;
  color: #666;
  font-weight: bold;
}

.welcome-modal-body p {
  margin: 0 0 10px 0;
}

.welcome-modal-body p:last-child {
  margin-bottom: 0;
}

.welcome-modal-footer {
  display: flex;
  gap: 10px;
  padding: 16px 20px;
  border-top: 1px solid #e8e8e8;
  background-color: #f9f9f9;
}

.welcome-modal-button {
  flex: 1;
  padding: 8px 16px;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
}

.welcome-modal-button.gitee {
  background-color: #da121a;
  color: white;
}

.welcome-modal-button.gitee:hover {
  background-color: #b80f16;
}

.welcome-modal-button.github {
  background-color: #42b983;
  color: white;
}

.welcome-modal-button.github:hover {
  background-color: #42b983;
}

/* 暗黑模式 */
.dark .welcome-modal-content {
  background-color: #1e1e1e;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.dark .welcome-modal-header {
  border-bottom-color: #333;
}

.dark .welcome-modal-header h3 {
  color: #e0e0e0;
}

.dark .welcome-modal-close {
  color: #999;
}

.dark .welcome-modal-close:hover {
  background-color: #333;
  color: #e0e0e0;
}

.dark .welcome-modal-body {
  color: #b0b0b0;
}

.dark .welcome-modal-footer {
  border-top-color: #333;
  background-color: #252525;
}
</style>