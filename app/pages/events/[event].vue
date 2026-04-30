<template>
  <article class="event">
    <header class="event__container">
      <h1 class="event__title title">{{ data.title }}</h1>

      <div class="event__about">
        <div class="event__info">

          <div class="event__feature event__feature--180g">
          <SvgIcon
        class="event__icon"
        name="rectangle"
        width="139"
        height="1"
      />
        </div>

          <time v-if="datetime" :datetime="data.date" class="event__time">
            {{ datetime.date }}
          </time>
          <div class="event__info-text">{{ data.location }}</div>

          <div class="event__feature event__feature--180g">
          <SvgIcon
        class="event__icon"
        name="rectangle"
        width="139"
        height="1"
      />
        </div>
        </div>

        <picture class="event__picture">
          <source type="image/webp" :srcset="data.img_webp" />
          <img :src="data.img" :alt="data.alt" class="event__image" />
        </picture>

        <div class="event__info event__info--right">
          <div class="event__feature">
          <SvgIcon
        class="event__icon"
        name="rectangle"
        width="139"
        height="1"
      />
        </div>
          <span v-if="datetime" class="event__time event__time--right" data-caption="начало">
            {{ datetime.time }} 
            <div class="event__info-text event__info-text--700">начало</div>
          </span>
          <div class="event__info-text">{{ data.address }}</div>

          <div class="event__feature">
          <SvgIcon
        class="event__icon"
        name="rectangle"
        width="139"
        height="1"
      />
        </div>
        </div>
      </div>
    </header>

    <div class="event__container">
      <div class="content event__content" v-html="data.content"></div>
    </div>
  </article>

  <ReserveEvent/>
</template>

<script setup>
const slug = computed(() => useRoute().params.event);
const URL = computed(
  () => `http://localhost:3000/json/events/${slug.value}.json`,
);

const { data } = await useFetch(URL);

  const datetime = computed(() => {
    try {
      const date = new Date(data.value.date);
      return {
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
    } catch {
      return null;
    }
  });

</script>

<style lang="less">
.event {
  padding: 40px 0 80px;
  // display: flex;
  align-items: center;

  &__container {
    .container();
  }

  &__content {
    max-width: 870px;

    @media @bw1340 {
      max-width: 831px;
    }

    @media @bw768 {
      max-width: 600px;
    }

    @media @bw370 {
      max-width: 282px;
    }
  }

  &__title {
    display: flex;
    justify-content: center;
    color: @black;
    font-family: @font2;
    font-size: 70px;
    font-weight: 500;
    margin-bottom: 80px;
    max-width: 1919px;
    width: 100%;

    @media @bw1340 {
      font-size: 50px;
    }

    @media @bw768 {
      // max-width: 468px;
      font-size: 40px;
      margin-bottom: 64px;
    }

    @media @bw600 {
      font-size: 30px;
    }

     @media @bw500 {
      font-size: 20px;
     }

    @media @bw370 {
      margin-bottom: 40px;
    }
  }

  &__about {
    display: flex;
    width: 100%;
    max-width: 942px;
    justify-content: center;
    margin-bottom: 80px;
    margin-right: auto;
    margin-left: auto;

    @media @bw768 {
      margin-bottom: 76px;
    }

    @media @bw650 {
      display: grid;
      justify-items: center;
      max-width: 261px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 262px 56px;
      gap: 40px 20px;
      grid-template-areas:
        "Sade Sade"
        "time right";
        margin-left: 20%;
    }

    @media @bw370 {
      margin-bottom: 60px;
      margin-left: 38px;
    }
  }
&__info{
  display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: @font3;
    color: @black;
    margin-right: 58px;

    @media @bw1340 {
      margin-right: 50px;
    }

    @media @bw768 {
      margin-right: 41px;
    }

    @media @bw650 {
      margin: 0;
      grid-area: time;
      order: 3;
      max-height: 56px;
    }

    &--right {
      margin-left: 58px;
      margin-right: 0;
      text-align: left;

      @media @bw1340 {
        margin-left: 50px;
        margin-right: 0;
      }

      @media @bw768 {
        margin-left: 41px;
        margin-right: 0;
      }

      @media @bw650 {
        grid-area: right;
        order: 2;
      }
    }
}
  

  &__picture {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 506px;
    height: 532px;

    @media @bw1340 {
      max-width: 426px;
      max-height: 456px;
    }

    @media @bw1020 {
      max-width: 280px;
      max-height: 316px;
    }

    @media @bw768 {
      max-width: 245px;
      max-height: 262px;
    }

    @media @bw650 {
      display: grid;
      grid-area: Sade;
      grid-column: 1/3;
      // grid-column-end: 3;
      justify-content: center;
      align-items: center;
      // margin-left: 50px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &__time {
    display: flex;
    // flex-direction: column;
    // justify-content: center;
    font-family: @font3;
    font-size: 30px;
    font-weight: 300;
    color: @black;
    text-align: right;
    // margin-right: 58px;

    // @media @bw1340 {
    //   margin-right: 50px;
    // }

    @media @bw768 {
      font-size: 18px;
    }

    @media @bw650 {
      
      grid-area: time;
      // order: 3;
    }

    &--right {
      // margin-left: 58px;
      margin-right: 0;
      text-align: left;

      @media @bw1340 {
        // margin-left: 50px;
        margin-right: 0;
      }

      @media @bw768 {
        // margin-left: 41px;
        margin-right: 0;
      }

      @media @bw650 {
        grid-area: right;
        // order: 2;
      }
    }
  }

  &__info-text {
    display: flex;
    justify-content: flex-end;
    font-family: @font3;
    color: @black;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 0;
    margin-top: 0;

    @media @bw768 {
      font-size: 12px;
    }

    &--right {
      display: flex;
      justify-content: flex-start;
    }

    &--300 {
      display: flex;
      justify-content: center;
      font-size: 30px;
      font-weight: 300;

      @media @bw768 {
        font-size: 18px;
      }
    }

    &--700 {
      display: flex;
      transform: translateY(10px) translateX(10px);
      font-size: 16px;
      font-weight: 700;

      @media @bw768 {
        font-size: 12px;
      }

      @media @bw650 {
        grid-area: 700;
        margin-top: -8px;
      }
    }
  }

  &__text-bottom {
    display: flex;
    text-align: right;
    margin-top: 11px;
    margin-bottom: 0px;
    font-size: 16px;
    font-weight: 700;

    @media @bw768 {
      font-size: 12px;
    }

    @media @bw650 {
      grid-area: text-bottom;
    }

    &--left {
      justify-content: flex-end;
    }

    &--right {
      justify-content: flex-start;
    }
  }

  &__feature {
    margin-bottom: 0px;
    margin-top: 0px;

    &--180g {
      transform: rotate(180deg);

      @media @bw650 {
        grid-area: 180g;
        margin-bottom: -7px;
        margin-top: 7px;
      }
    }
  }

  &__image {
    @media @bw650 {
      max-width: 245px;
      max-height: 262px;
      justify-content: center;
    }
  }

  &__heading {
    font-size: 18px;
    font-weight: 700;

    @media @bw370 {
      font-size: 16px;
    }
  }

  &__ul {
    font-family: @font1;
    color: @black;
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    padding-left: 20px;
    margin-bottom: 75px;

    @media @bw768 {
      margin-bottom: 55px;
    }

    @media @bw370 {
      font-size: 14px;
      line-height: 28px;
    }
  }

  &__ol {
    font-family: @font1;
    color: @black;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    padding-left: 20px;
    margin-top: 50px;

    @media @bw768 {
      margin-top: 40px;
    }

    @media @bw370 {
      font-size: 14px;
      line-height: 19px;
    }
  }

  &__li {
    &::marker {
      background-color: @red;
    }
  }

  &__paragraf {
    font-family: @font1;
    color: @black;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;

    @media @bw370 {
      font-size: 14px;
      line-height: 19px;
    }
  }

  &__pic1 {
     @media @bw768 {
      max-width: 324px;
      max-height: 215px;
     }
  }

   &__bi_play {
    position: absolute;
    bottom: 180px;
    right: 350px;
    z-index: 1;
  }

  &__pic4 {
    position: relative;

     @media @bw768 {
      max-width: 322px;
      max-height: 214px;
     }
  }
}

.content {
  color: @black;
  font-family: @font1;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.375;
  word-wrap: break-word;

  h1,
  h2,
  h4,
  h4,
  h5,
  h6 {
    // margin: 1.3em 307px 0.8em;
    font-family: @font1;
    color: @black;
    font-weight: 600;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  h1 {
    font-size: 32px;
   
    
    // font-weight: 700;
    // width: 247px;
    // height: 25px;
    // top: 1029px;
    // left: 293px;
  }

  h2 {
    font-size: 28px;
    // font-weight: 700;
    // width: 247px;
    // height: 25px;
    // top: 1029px;
    // left: 293px;
  }

  h4 {
    font-size: 24px;
  }

  h4 {
    font-size: 20px;
  }

  h5 {
    font-size: 18px;
  }

  h6 {
    font-size: 16px;
  }

  ol,
  ul,
  p {
    margin: 20px 0;
    // margin-left: 307px;
    // font-family: @font1;
    // font-weight: 400;
    // font-size: 16px;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  ul,
  ol {
    position: relative;
    padding: 0;
    list-style: none;
    font-family: @font1;
  }

  ul > li {
    box-sizing: border-box;
    position: relative;
    padding-left: 20px;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 8px;
      left: 0;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: @red;
      pointer-events: none;
    }
  }

  ol {
    counter-reset: li;
    padding: 0;
  }

  ol > li {
    counter-increment: li;
    &::before {
      content: counter(li) + ". ";
      box-sizing: border-box;
      display: inline-block;
      min-width: 20px;
      color: @red;
      white-space: pre;
    }
  }

  ul > li,
  ol > li {
    margin: 0 0 8px;
    cursor: default;
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  img,
  iframe,
  figure {
    display: block;
    max-width: 700px;
  }

  & > img,
  & > iframe,
  & > figure {
    margin: 30px 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  iframe {
    border: none;
    outline: none;
  }

  figure {
    img {
      max-width: 100%;
      margin: 0;
    }
  }

  figcaption {
    margin: 15px 0;
    color: fade(@black, 60%);
    font-weight: 500;
    font-size: 13px;
    text-align: left;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  img {
    &[align],
    &.alignright {
      margin: 5px 0;
      & + figcaption {
        display: none;
      }
    }

    &[align="right"],
    &.alignright {
      margin-left: 10px;
    }

    &.alignright {
      float: right;
    }

    &[align="left"],
    &.alignleft {
      margin-right: 10px;
    }

    &.alignleft {
      float: left;
    }
  }

  a {
    font-weight: 600;
    color: @black;
    text-decoration: underline;
    transition: color 0.2s;
    cursor: pointer;
    &:hover {
      color: @red;
    }
  }

  blockquote {
    width: 868px;
    // height: 60px;
    position: relative;
    margin: 30px 0;
    padding: 0 0 0 20px;
    color: fade(@black, 90%);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    font-family: @font1;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background-color: @red;
    }

    @media @bw1340 {
      width: 831px;
    }
     @media @bw768 {
      width: 600px;
    }
     @media @bw600 {
      width: 282px;
    }
  }

  b {
    font-weight: 700;
  }
 img {
  display: flex;
    justify-content: center;
 }
}

</style>