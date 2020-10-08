<template>
  <transition name="fade">
    <div class="modal--background" v-if="modalShown" @click="$emit('modal-close')">
      <div class="modal--list" @click.stop>
        <AppContainer full flex vertical>
          <template v-slot:content>
            <div class="modal--header">
              <h1 class="modal--title">
                <slot name="title"/>
                <Back class="back--button" @click="$emit('modal-close')"/>
              </h1>
            </div>
            <div class="modal--content">
              <slot/>
            </div>
            <div class="modal--footer" v-if="!noSubmit || !noCancel">
              <AppButton primary v-if="!noSubmit">
                <trans :string="submitText"/>
              </AppButton>
              <AppButton v-if="!noCancel">
                <trans :string="closeText"/>
              </AppButton>
            </div>
          </template>
        </AppContainer>
        <slot name="content"/>
      </div>
    </div>
  </transition>
</template>

<script>
import AppContainer from './AppContainer.vue';
import AppButton from '../atoms/AppButton.vue';
import { Close } from 'mdue';

export default {
  name: "AppModal",
  components: { AppButton, AppContainer, Back: Close },
  props: {
    modalShown: Boolean,
    noSubmit: Boolean,
    noCancel: Boolean,
    closeText: { type: String, default: 'modal.button_close' },
    submitText: { type: String, default: 'modal.button_submit' }
  },
  emits: ['modal-close', 'modal-cancel', 'modal-submit']
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  margin-top: -100%;
}

.modal--background {
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.modal--background::after {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  content: '';
  display: block;
  height: 200%;
  left: 0;
  position: fixed;
  top: 100%;
  width: 100%;
  z-index: 1000;
}

.modal--list {
  background: var(--body--bg);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  height: 100%;
  max-width: 50em;
  max-height: 38em;
  width: 100%;
  z-index: 1001;
}

.modal--title {
  align-items: center;
  display: flex;
  flex: 100%;
  font-weight: 500;
  justify-content: space-between;
}

.back--button {
  cursor: pointer;
}

.modal--header {
  align-items: center;
  display: flex;
  height: 4.5em;
  width: 100%;
}

.modal--content {
  width: 100%;
  flex: 1;
  padding-bottom: 1em;
}

.modal--footer {
  width: 100%;
  height: 3em;
}
</style>
