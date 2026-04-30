<template>
  <ClientOnly>
    <teleport to="body">
      <div v-if="isActive" class="modal-window">
        <div class="modal-window__wrapper">
          <div class="modal-window__sticky-close">
            <button
              type="button"
              title="Закрыть"
              class="modal-window__x-btn x-btn"
              @click="close"
            >
              <SvgIcon class="x-btn__icon" name="x" width="24" height="24" />
            </button>
          </div>

          <div class="modal-window__container">
            <h2 class="modal-window__title" v-html="title"></h2>

            <slot></slot>
          </div>
        </div>
      </div>
    </teleport>
  </ClientOnly>
</template>

<script setup>
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    
    title: {
      type: String,
      default: "",
    },
  });

  const store = useStore();
  const isActive = computed(() => {
    return props.name ? store.modal[props.name] : null;
  });

  const close = () => {
    if (props.name) store.closeModal(props.name);
  };
</script>

<style lang="less">
.modal-window {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 90px 50px;
  backdrop-filter: blur(50px);
  background: rgba(28, 27, 27, 0.4);
  // overflow: auto;
  z-index: 110;
  // display: none;

  @media @bw768 {
    padding: 0 40px 20px;
  }

  @media @bw370 {
    padding: 0 20px 20px 20px;
  }

  &__wrapper {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1210px;
    width: 100%;
    margin: 90px auto auto;
    background-color: @gray;
    background-image: url(../assets/images/noise.png);
    background-position: 0 0, 0 0;
    background-size: auto 100% auto;
    background-repeat: repeat, repeat-y;

    @media @bw1340 {
      max-width: 1144px;
    }

    @media @bw768 {
      max-width: 688px;
      margin: 72px auto auto;
    }

    @media @bw370 {
      max-width: 280px;
      margin: 80px auto auto;
    }
  }

  &__sticky-close {
    position: sticky;
    top: 0;
    align-self: flex-end;
    width: 0;
    height: 0;
  }


  &__x-btn {
    position: absolute;
    top: -30px;
    right: -30px;

    @media @bw370 {
      top: -15px;
    right: -15px;
    }
  }

  &__container {
    box-sizing: border-box;
    width: 100%;
    max-width: 1040px;
    margin: 0 auto;
    padding: 0 40px 40px;

     @media @bw370 {
       padding: 0 20px 20px;
     }

  }

  &__title {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: -40px 0 70px -85px;
    padding: 10px 85px;
    max-width: 595px;
    min-height: 80px;
    width: 100%;
    background-color: @black;
    text-transform: uppercase;
    font-weight: 400;
    font-family: @font2;
    font-size: 22px;
    line-height: 1.36;
    color: @white;
    letter-spacing: 0.02em;
    z-index: 1;

    @media @bw1340 {
      margin: -40px 0 70px -25px;
    }

    @media @bw768 {
      margin: -40px 0 70px -13px;
      padding: 10px 59px 18px;
      max-width: 465px;
      min-height: 80px;
    }

    @media @bw370 {
       margin: -40px 0 40px -13px;
      padding: 10px 22px 20px;
      max-width: 225px;
      min-height: 77px;
      font-size: 14px;
    }
  }
  }

  .x-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  padding: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: @black;
  transition: background-color 0.2s;
  &:hover,
  &:active {
    background-color: @red;
  }
  &__icon {
    color: @white;
    pointer-events: none;
    justify-content: center;
  }

   @media @bw370 {
    width: 36px;
  height: 36px;
   }
}
</style>