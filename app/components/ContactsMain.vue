<template>
  <section class="about home__about">
  <h2 class="about__section-title section-title">Контакты</h2>
  <div class="contacts__container">
    <div class="contacts__inform">
      <div class="contacts__location">
        <SvgIcon
        class="contacts__square"
        name="location"
        width="110"
        height="110"
        />
        <div class="contacts__blok">
          <h3 class="contacts__title">Томск, Красноармейская 146</h3>
          <p class="contacts__content">2 этаж <br>оф. 206</p>
        </div>
      </div>

      <div class="contacts__home-alt">
        <SvgIcon
        class="contacts__square"
        name="home-alt"
        width="110"
        height="110"
        />
        <div class="contacts__blok">
          <h3 class="contacts__title">Отдел аренды </h3>
          <a class="contacts__content" href="tel:8 (3822) 90-72-56">8 (3822) 90-72-56</a>
          <a class="contacts__content" href="mailto:idat@tusur.ru">idat@tusur.ru</a>
        </div>
      </div>

      <div class="contacts__start">
        <SvgIcon
        class="contacts__square"
        name="star"
        width="110"
        height="110"
        />
        <div class="contacts__blok">
          <h3 class="contacts__title">Отдел мероприятий </h3>
          <a class="contacts__content" href="tel:8 (3822) 90-72-56">8 (3822) 90-72-56</a>
          <a class="contacts__content" href="mailto:idat@tusur.ru">idat@tusur.ru</a>
        </div>
      </div>

    </div>
    <div class="contacts__square-map"  width="750" height="491">
<TheMap/>
    </div>
  </div>

  <p class="contacts__text">Просто делайте, что нравится, <br>а мы вам поможем</p>


</section>
</template>

<script setup></script>

<style lang="less">
.contacts {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__container {
    display: flex;
    .container();

    @media @bw1170 {
      display: grid;
      grid-template-columns: 1fr;
      gap: 100px 0;
      grid-template-areas:
        "square-map"
        "inform";
      justify-items: center;
    }
  }

  &__inform {
    flex: 1;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    @media @bw1170 {
      grid-area: inform;
      display: grid;
      grid-template-columns: 273px 233px 195px;
      grid-template-areas:
        "location home-alt start";
      justify-items: center;
    }

    @media @bw768 {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 40px;
      grid-template-areas:
        "location"
        "home-alt"
        "start";
      justify-items: flex-start;
    }
  }

  &__location,
  &__home-alt,
  &__start {
    margin-bottom: 79px;

    @media @bw1170 {
      margin-bottom: 0;
    }

    @media @bw768 {
      justify-items: start;
    }
  }

  &__location {
    @media @bw1170 {
      grid-area: location;
      display: grid;
      grid-template-rows: 110px 1fr;
      gap: 30px 0;
      grid-template-areas:
        "square"
        "blok";
      justify-items: center;
    }

    @media @bw768 {
      grid-template-rows: 110px 1fr;
      gap: 30px 0;
      grid-template-areas:
        "square blok";

    }
  }

  &__home-alt {
    @media @bw1170 {
      grid-area: home-alt;
      display: grid;
      grid-template-rows: 110px 1fr;
      gap: 30px 0;
      grid-template-areas:
        "square"
        "blok";
      justify-items: center;
    }

    @media @bw768 {
      grid-template-rows: 110px 1fr;
      gap: 30px 0;
      grid-template-areas:
        "square blok";

    }
  }

  &__start {
    @media @bw1170 {
      grid-area: start;
      display: grid;
      grid-template-rows: 110px 1fr;
      gap: 30px 0;
      grid-template-areas:
        "square"
        "blok";
      justify-items: center;
    }

    @media @bw768 {
      grid-template-rows: 110px 1fr;
      gap: 30px 0;
      grid-template-areas:
        "square blok";

    }
  }

  &__square {
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    outline: none;
    border: none;
    padding: 0;
    width: 110px;
    height: 110px;
    background-color: @black;
    position: relative;
    z-index: 1;

    @media @bw1170 {
      grid-area: square;
      display: grid;
      justify-items: center;
    }
  }

  &__square-map {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    padding: 0;
    width: 750px;
    height: 491px;
    background-color: @black;
    // position: relative;
    // z-index: 1;

    @media @bw1170 {
      grid-area: square-map;
    }

    @media @bw768 {
      max-width: 708px;
      width: 100%;
      object-fit: cover;
      height: 463px;
    }

    @media @bw650 {
      max-width: 500px;
      width: 100%;
      height: 327px;
    }

    @media @bw370 {
      max-width: 280px;
      width: 100%;
      height: 186px;
      margin-right: auto;
      margin-left: auto;
    }
  }

  &__symbol {
    display: flex;
    justify-content: center;
    transform: translateX(40px) translateY(40px);
    align-items: center;
    position: absolute;
    width: 24px;
    height: 24px;
    color: #bc3324;
  }

  &__map {
    flex: 1;
  }

  &__title {
    display: flex;
    justify-items: left;
    padding-left: 54px;
    color: @black;
    font-family: @font1;
    font-size: 20px;
    font-weight: 600;

    @media @bw1170 {
      padding-left: 0;
      font-size: 18px;
      font-weight: 700;
    }
    @media @bw370 {
      font-size: 14px;
      font-weight: 600;
    }
  }

  &__content {
    display: flex;
    text-align: left;
    padding-left: 54px;
    color: @black;
    font-family: @font1;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    max-width: 130px;

    @media @bw1170 {
      text-align: center;
      padding-left: 0;
      margin-top: 0;
    }
    @media @bw370 {
      font-size: 14px;
    }
  }

  &__text {
    display: block;
    text-align: center;
    justify-items: center;
    color: @black;
    font-family: @font3;
    font-size: 128px;
    font-weight: 700;
    height: 308px;
    margin-bottom: 140px;

    @media @bw1340 {
      width: 1519px;
      font-size: 90px;
    }

    @media @bw1170 {
      font-size: 100px;
      font-weight: 700;
    }

    @media @bw768 {
      font-size: 80px;
      font-weight: 700;
    }

    @media @bw370 {
      font-size: 40px;
      font-weight: 700;
      width: 446px;
      height: 162px;
      margin-bottom: 0;
    }
  }

  &__blok {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateY(-15px);

    @media @bw1170 {
      grid-area: blok;
      align-items: center;
      justify-content: flex-start;
      transform: translateY(0);
    }

    @media @bw768 {
      align-items: start;
      margin-left: 10px;
    }
  }
}
</style>