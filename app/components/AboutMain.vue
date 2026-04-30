<template>
  <section class="about home__about">
  <h2 class="about__section-title section-title">О нас</h2>
  <div class="about__container"></div>
</section>
<section class="about">
  <div class="about__container">
    <div class="about__block1">
      <h3 class="about__title">Проект «Millennials»</h3>
      <p class="about__text1">
        Вдохновлен молодыми идейными людьми, увлеченными творчеством, эмоциями и желанием сделать мир лучше, проявить
        себя. У них есть талант и стремление, у нас возможность помочь им воплотить их мечту в реальность.
      </p>
    </div>
    <div class="about__block2">
      <picture class="about__picture1">

        <img src="assets/images/pic1.jpg" class="about__img about__img--1" alt="pic1">
      </picture>
      <h3 class="about__title">
        Мы предоставляем площади для вашего мероприятия
      </h3>
      <picture class="about__picture2">
        <img src="assets/images/pic2.jpg" class="about__img about__img--2" alt="pic2">
      </picture>
      <p class="about__text">
        И оказываем помощь с организацией, если вам это нужно. Наша цель: вовлечь в культурную жизнь города как можно
        больше людей, помочь молодым ребятам сделать первые шаги к своей мечте и рассказать всем о том, что их волнует.
      </p>

    </div>

    <div class="about__block3">
      <div class="about__picture3">
          <img src="/assets/images/pic3.jpg" class="about__img about__img--3" alt="pic3" />
      </div>

      <p class="about__text2">
        Мы уже успешно организовали и провели более 100 проектов. Посмотрите, как это было классно.
      </p>

      <div class="about__arrow arrow">
      <a href="#" class="about__link">
        <span class="about__link">Смотреть</span> 
        <div class="arrow__icon">

          <SvgIcon
        class="arrow__icon"
        name="arrow"
        width="92"
        height="62"
      />
        </div>
      </a>
    </div>
    </div>

    
  </div>
</section>
</template>

<script setup>

</script>

<style lang="less">
.about {
  position: relative;
  display: block;
  width: 100%;
  margin-top: 200px;
  margin-bottom: 150px;

  @media @bw768 {
    max-width: 708px;
  }

  @media @bw500 {
    max-width: 460px;
  }

  &__container {
    .container();
  }

  &__block1 {
    display: block;
    margin-bottom: 100px;
    margin-top: 50px;

    @media @bw768 {
      max-width: 708px;
      width: 100%;
      margin-right: 30px;
      margin-bottom: 80px;
    }

    @media @bw370 {
      max-width: 280px;
      width: 100%;
      margin-right: 20px;
      margin-bottom: 60px;
    }
  }

  &__block2 {
    display: grid;
    grid-template-columns: 1fr 406px;
    gap: 100px 60px;
    grid-template-areas:
      "pic1 pic2"
      "title pic2"
      "text text";

    @media @bw1340 {
      gap: 100px 39px;
    }

    @media @bw1170 {
      display: grid;
      justify-content: flex-start;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 470px 170px auto;
      gap: 80px 39px;
      grid-template-areas:
        "pic1 pic1"
        "title pic2"
        "text pic2";
    }

    @media @bw768 {
      gap: 40px 27px;
      grid-template-rows: 470px 100px auto;
    }

    @media @bw650 {
      gap: 60px 27px;
      grid-template-columns: 1fr;
      grid-template-rows: 411px 30px auto auto;
      grid-template-areas:
        "pic1"
        "title"
        "text"
        "pic2";
    }

    @media @bw370 {
      gap: 60px 2px;
      grid-template-columns: auto;
      grid-template-rows: auto 10px auto;
    }
  }

  &__block3 {
    display: grid;
    max-width: 1334px;
    width: 100%;
    margin-top: 74px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2px;
    gap: 22px 62px;
    grid-template-areas:
      "pic3 text2"
      "pic3 arrow";

    @media @bw1340 {
      max-width: 1260px;
      margin-top: 87px;
      margin-right: 40px;
      grid-template-columns: 1fr 1fr;
    }

    @media @bw1170 {
      display: grid;
      max-width: 708px;
      width: 100%;
      margin-top: 52px;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      gap: 22px 62px;
      grid-template-areas:
        "pic3 pic3"
        "text2 arrow";
      margin-top: 52px;
    }

    @media @bw768 {
      grid-template-columns: 280px auto;
    }

    @media @bw650 {
      max-width: 600px;
      grid-template-columns: auto;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        "pic3"
        "text2"
        "arrow";
    }

    @media @bw370 {
      grid-template-columns: auto;
      max-width: 280px;
      margin-top: 50px;
    }
  }

  &__picture1 {
    grid-area: pic1;

    @media @bw370 {
      max-width: 370px;
    }
  }

  &__title {
    grid-area: title;
    margin: 10px 0 0;
    font-size: 44px;
    font-weight: 700;

    @media @bw1170 {
      width: 419px;
      font-size: 35px;
    }

    @media @bw768 {
      font-size: 26px;
    }

    @media @bw370 {
      font-size: 18px;
      width: 280px;
    }
  }

  &__picture2 {
    grid-area: pic2;
    transform: translateY(37%);
    width: 100%;

    // align-self: flex-end;
    @media @bw1170 {
      display: grid;
      grid-row: 2/3;
      margin-left: 27px;
    }

    @media @bw650 {
      grid-row: 4/5;
      transform: translateY(0);
      justify-content: end;
      margin-left: 0;
    }

  }

  &__picture3 {
    grid-area: pic3;
    grid-row: 1/2;
    flex: 1;
    width: 870px;
    max-width: 100%;
    min-width: 267px;
    display: grid;
    background-size: cover;

    @media @bw1170 {
      grid-column: 1/3;
    }

    @media @bw650 {
      grid-column: 1/2;
      max-width: 672px;
      width: 100%;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      left: auto;
      max-width: 100%;
      width: 928px;
      min-width: 280px;
      max-height: 50%;
      height: 246px;
      min-height: 74px;
      background-color: (rgba(188, 51, 36, 1));
      // transform: translateX(35px);
      padding-top: auto;

      @media @bw1340 {
        max-width: 867px;
        max-height: 231px;
        width: 100%;
        // transform: translateX(30px);
      }

      @media @bw768 {
        max-width: 708px;
        width: 100%;
        max-height: 187px;
        margin-right: 30px;
      }

      @media @bw370 {
        max-width: 280px;
        max-height: 74px;
        width: 100%;
        margin-right: 20px;
      }
    }
  }

  &__img {

    &--1 {
      max-width: 870px;
      width: 100%;

      @media @bw1340 {
        max-width: 828px;
        width: 100%;
      }

      @media @bw1170 {
        max-width: 700px;
      }

      @media @bw768 {
        margin-right: 30px;
        max-width: 708px;
        width: 100%;
      }

      @media @bw650 {
        width: 600px;
        max-width: 100%;
      }

      @media @bw500 {
        width: 380px;
        max-width: 100%;
      }

      @media @bw370 {
        margin-left: 25px;
        margin-right: 25px;
        max-width: 280px;
        width: 100%;
      }
    }

    &--2 {

      max-width: 406px;
      width: 100%;

      @media @bw1660 {
        max-width: 393px;
      }

      @media @bw1340 {
        max-width: 350px;
        width: 100%;
        margin-right: 40px;
      }

      @media @bw1170 {
        display: grid;
      }

      @media @bw768 {
        max-width: 262px;
        margin: 0;
      }

      @media @bw370 {
        max-width: 193px;
      }
    }

    &--3 {
      position: relative;
      display: flex;
      width: 100%;
      top: 18px;
      transform: translateX(40px);

      @media @bw1340 {
        max-width: 821px;
        width: 100%;
      }

      @media @bw768 {
        max-width: 672px;
        width: 100%;
        top: 14px;
        transform: translateX(30px);
      }

      @media @bw370 {
        max-width: 267px;
        width: 100%;
        transform: translateX(20px);
        margin-right: 20px;
        top: 5px;
      }
    }
  }

  &__text,
  &__text1 {
    grid-area: text;
    margin-left: auto;
    margin-right: 80px;
    max-width: 867px;
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    font-family: @font1;

    @media @bw1340 {
      max-width: 827px;
      width: 100%;
      margin-left: auto;
      margin-right: 40px;
    }

    @media @bw768 {
      font-size: 16px;
    }
  }

  &__text {
    @media @bw1170 {
      max-width: 360px;
      margin-left: 101px;
      margin-right: 27px;
    }

    @media @bw768 {
      max-width: 348px;
      width: 100%;
      margin-left: 71px;
    }

    @media @bw650 {
      margin-left: 0;
      max-width: 600px;
    }

    @media @bw370 {
      max-width: 280px;
      margin-left: 0;
    }
  }

  &__text1 {
    margin-top: 50px;

    @media @bw1170 {
      max-width: 680px;
      margin-left: 250px;
    }

    @media @bw1020 {
      max-width: 680px;
      margin-left: 150px;
    }

    @media @bw768 {
      max-width: 637px;
      width: 100%;
      margin: 50px 30px 80px 71px;
    }

    @media @bw650 {
      max-width: 600px;
      margin-left: 0;
    }

    @media @bw500 {
      max-width: 400px;
      margin-left: 50px;
    }

    @media @bw370 {
      max-width: 280px;
      margin-left: 0;
    }
  }

  &__text2 {
    grid-area: text2;
    display: grid;
    flex: 1;
    max-width: 344px;
    width: 100%;
    align-items: center;
    margin-left: 40px;

    @media @bw1340 {
      margin-left: 0;
      margin-right: 40px;
      max-width: 353px;
      margin-top: 80px;
    }

    @media @bw1170 {
      display: flex;
      flex-direction: row;
      max-width: 280px;
      margin-left: 0;
    }

    @media @bw650 {
      max-width: 281px;
      flex-direction: column;
      margin-top: 60px;
    }
  }

  &__arrow {
    grid-area: arrow;
    grid-column: 2/3;
    grid-row: 2/3;
    display: grid;
    flex-direction: row;
    cursor: pointer;
    align-items: end;
    transform: translateY(-30px);
    margin-left: 40px;
    // max-width: 344px;
    width: 100%;
    

    @media @bw1340 {
      margin-left: 0;
      margin-right: 40px;
    }

    @media @bw1170 {
      transform: translateY(100px);
    }

    @media @bw768 {
      max-width: 262px;
    }

    @media @bw650 {
      transform: translateY(0);
      grid-column: 1/2;
      grid-row: 3/4;
      max-width: 280px;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    margin-left: auto;
    justify-content: space-between;
    align-self: center;
    font-size: 16px;
    font-weight: 600;
    font-family: @font1;
    color: @black;
    text-decoration: none;
    transition: color 0.2s;
    margin-right: 128px;
    height: 0;

    @media @bw1170 {
      margin-right: 117px;
    }

    @media @bw768 {
      width: 262px;
    }

    @media @bw370 {
      width: 280px;
    }

    &:hover {
      color: @red_dark;
    }
  }

  &__icon {
    display: flex;
    position: absolute;
    max-width: 91px;
    justify-content: end;
    justify-items: end;
    left: 20px;
    margin-left: 30px;
  }
}
</style>