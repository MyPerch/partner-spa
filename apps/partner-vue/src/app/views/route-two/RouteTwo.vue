<script setup lang="ts">
import { onMounted } from 'vue';
import { Modal } from 'bootstrap';

let modalInstance: Modal;

onMounted(() => {
  const modalEl = document.getElementById('exampleModal');
  if (modalEl) {
    modalInstance = new Modal(modalEl);

    modalEl.addEventListener('shown.bs.modal', () => {
      window.dispatchEvent(new CustomEvent('perch-widget:init', { detail: { perchWidgetId: 'xxDu9Zga' } }));
    });
  }

  window.dispatchEvent(new Event('perch-widget:init'));
});

const openModal = () => {
  modalInstance?.show();
};

function closeModal() {
  modalInstance?.hide();
}
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Widget from modal</h5>
          <button
            @click="closeModal"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="perch-widget" widget-id="xxDu9Zga">
            <!-- Replace the inner content with custom loader -->
            <div class="perch-widget-loading-indicator" style="text-align: center;">Loading...</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="perch-widget" widget-id="7iQkHzyj">
    <!-- Replace the inner content with custom loader -->
    <div class="perch-widget-loading-indicator" style="text-align: center;">Loading...</div>
  </div>

  <button type="button" class="btn btn-lg btn-primary" @click="openModal">Launch widget</button>
</template>

<style scoped></style>
