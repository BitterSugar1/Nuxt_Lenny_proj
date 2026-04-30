<template>
  <header class="main-header home__main-header">
  <div class="main-header__container"></div>
    <h1 class="main-header__heading">ART-ПРОСТРАНСТВО</h1>
<SvgIcon
        class="main-header__Lenni"
        name="lenni"
        width="1920"
        height="325"
      />
    <p class="main-header__paragraph">ДЛЯ ЛЮДЕЙ, ГОРЯЩИХ СЕРДЦЕМ И ДЕЛОМ<br>МЕСТО ДЛЯ НАСТОЯЩЕГО</p>
  
</header>
</template>

<script setup></script>

<style lang="less">
.main-header {
  @media @bw768 {
    max-width: 768px;
  }

  // @media @bw370 {
  //   max-width: 370px;
  // }

  &__container {
    .container();
  }

  &__Lenni {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1920px;
    height: 325px;
    width: 100%;
    position: relative;
    font-size: 0;
    text-decoration: none;
    overflow: hidden;
    margin: auto;
    object-position: center;
    object-fit: cover;

    @media @bw1340 {
      width: 1518px;
      transform: translateX(-240px);
      height: auto;
    }

    @media @bw768 {
      overflow: hidden;
      width: 974px;
      transform: translateX(-130px);
      height: auto;
    }

    @media @bw370 {
      overflow: hidden;
      width: 437px;
      transform: translateX(-30px);
      height: auto;
    }
  }

  &__heading {
    grid-area: text;
    text-align: center;
    width: 100%;
    font-weight: 400;
    font-size: 45px;
    font-family: @font2;
    color: @black;
    margin-top: 0;
    margin-bottom: 70px;

    @media @bw1340 {
      font-size: 35px;
    }

    @media @bw768 {
      font-size: 30px;
      margin-bottom: 50px;
    }

    @media @bw370 {
      font-size: 13px;
      margin-bottom: 29px;
    }
  }

  &__paragraph {
    grid-area: text;
    text-align: center;
    width: 100%;
    font-weight: 400;
    font-size: 45px;
    font-family: @font2;
    color: @black;
    margin-top: 70px;
    margin-bottom: 100px;

    @media @bw1340 {
      font-size: 35px;
    }

    @media @bw768 {
      font-size: 30px;
      margin-top: 49px;
      margin-bottom: 73px;
    }

    @media @bw650 {
      font-size: 25px;
    }

    @media @bw370 {
      font-size: 13px;
      margin-top: 28px;
      margin-bottom: 40px;
    }
  }
}
</style>