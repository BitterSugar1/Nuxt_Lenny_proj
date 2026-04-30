<template>
  <section class="offers">
  <h4 class="offers__title">Я ХОЧУ:</h4>
  <div class="offers__btns">
    <button 
    class="btn offers__btn  btn--red" 
    type="button"
    @click="openPopup()"
    >
      Провести мероприятие
    </button>
    
    <button class="btn offers__btn  btn--white" type="button">Стать арендатором</button>
  </div>

  <ModalWindow
       :name="'getOffer'"
      :title="' Заполните форму<br />и мы подберем площадку'"
    >
  <EventsForm @close="closePopup" />

  </ModalWindow>
    
</section>
</template>

<script setup>
 const store = useStore();
  const openPopup = () => {
    store.openModal("getOffer");
  };

  const closePopup = () => {
    store.closeModal("getOffer");
  };
</script>

<style lang="less">
.offers {
  // margin-bottom: 200px;

  @media @bw768 {
    max-width: 768px;
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 130px;
  }

  @media @bw370 {
    max-width: 370px;
    margin-bottom: 100px;
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
  }

  &__container {
    .container();
  }

  &__title {
    grid-area: text;
    text-align: center;
    font-weight: 400;
    font-size: 22px;
    font-family: @font2;
    color: @black;
    margin-bottom: 46px;

    @media @bw768 {
      font-weight: 500;
      font-size: 16px;
      margin-top: 0;
      margin-bottom: 43px;
    }
  }

  &__btns {
    text-align: center;

    @media @bw650 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 550px;
      width: 100%;
      margin: 25px 20px;
      font-weight: 600;
      font-size: 14px;
    }

    @media @bw370 {
      margin: 0;
      max-width: 280px;
      padding: 0;
    }
  }

  &__btn {
    margin-right: 53px;
    margin-left: 53px;

    @media @bw1340 {
      margin-right: 47px;
      margin-left: 47px;
    }

    @media @bw768 {
      margin-right: 28px;
      margin-left: 28px;
    }

    @media @bw650 {
      width: 100%;
      font-weight: 600;
      font-size: 14px;
      justify-content: center;
      margin-bottom: 25px;
      margin-right: auto;
      margin-left: auto;
    }

    @media @bw600 {
      max-width: 280px;
      padding: 0;
      
    }
  }
}

.btn {
  display: inline-flex;
  box-sizing: border-box;
  padding: 15px 40px;
  border: 1px solid @black;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  color: @black;
  font-family: @font1;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.375;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;

  &:hover {
    background-color: @black;
    color: @white;
  }

  &--red {
    background-color: @red;
    border-color: @red;
    color: @white;

    @media @bw650 {
      order: 1;
      font-size: 14px;
      // padding: 15px 70px;
    }

    &:hover {
      background-color: @red_dark;
      border-color: @red_dark;
    }
  }

  &--black {
    background-color: @black;
    border-color: @black;
    color: @white;
  }

  &--white {
    @media @bw650 {
      order: -1;
      font-size: 14px;
      // padding: 15px 70px;
    }
  }
}
</style>