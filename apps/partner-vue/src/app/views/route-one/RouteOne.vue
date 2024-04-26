<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.dispatchEvent(new CustomEvent('perch-widget:init'));
})
</script>

<template>
  <div class="perch-widget" widget-id="xxDu9Zga">
    <!-- Replace the inner content with custom loader -->
    <div class="perch-widget-loading-indicator" style="text-align: center;">Loading...</div>
  </div>
</template>

<style scoped></style>
