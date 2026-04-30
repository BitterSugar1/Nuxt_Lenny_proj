<template>
  <div class="information">

  <div class="information__inform">

    <div class="information__price">
      <SvgIcon
        class="information__square"
        name="information"
        width="110"
        height="110"
        />
     
      <h3 class="information__title">Цены</h3>
      <p class="information__content">Цены, указанные на сайте носят информационный характер. Мы придерживаемся
        индивидуального подхода в работе с клиентом.</p>

    </div>

    <div class="information__contact">
      <SvgIcon
        class="information__square"
        name="contact"
        width="110"
        height="110"
        />
      
      <h3 class="information__title">Контакты</h3>
      <p class="information__content">Отдел организации мероприятий </p>
      <a class="information__content" href="tel:8 (3822) 90-72-56">8 (3822) 90-72-56</a>
      <a class="information__content" href="mailto:idat@tusur.ru">idat@tusur.ru</a>
    </div>

    <div class="information__handshake">
      <SvgIcon
        class="information__square"
        name="handshake"
        width="110"
        height="110"
        />
      <h3 class="information__title">Преимущество</h3>
      <p class="information__content">Мы имеем все возможности для того, чтобы помочь как малому бизнесу и молодым
        талантам, так и большим корпорациям и холдингам.</p>

    </div>

  </div>

</div>
</template>

<script setup></script>

<style lang="less">
.information {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 150px;
  margin-top: 100px;

  &__container {
    .container();
  }

  &__inform {
    display: flex;
    flex-wrap: wrap;
    gap: 120px 58px;

    justify-content: center;
  }

  &__square {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    padding: 0;
    width: 110px;
    height: 110px;
    background-color: @black;
    position: relative;
    z-index: 1;

  }

  &__symbol {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 24px;
    height: 24px;
    transform: translateX(40px) translateY(40px);
    color: #bc3324;
  }

  &__price,
  &__contact,
  &__handshake {
    display: block;
    justify-items: center;
    width: 401px;
    height: 253px;
  }

  &__use {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
  }

  &__title {
    display: flex;
    justify-items: center;
    color: @black;
    font-family: @font1;
    font-size: 20px;
    font-weight: 600;
  }

  &__content {
    display: flex;
    text-align: center;
    color: @black;
    font-family: @font1;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    margin-bottom: 0;
  }
}


//   &__container {
//     .container();
//   }
//   display: grid;
//   gap: 65px 11%;
//   grid-template-columns: 444,66px 1fr;
//   grid-template-areas:
//     "inform contact handshake";

//   justify-items: center;

//   width: 100%;
// }
</style>