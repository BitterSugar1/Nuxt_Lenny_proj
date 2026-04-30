<template>
<section class="upcoming">
  <div class="upcoming__wrapper">
    <div class="upcoming__container">
      <h2 class="upcoming__title section-title">Мероприятия</h2>
       <TheSwiper
          :component="EventCard"
          :list="list"
          class="events-upcoming__swiper"
        />
      <a href="#" class="listing__link link">Смотреть все</a>
    </div>
  </div>
</section>
</template>

<script setup>
import { EventCard } from "#components";
const list = ref([]);

const URL = "http://localhost:3000/json/events.json";

  const { data } = await useAsyncData(`upcoming`, () => {
    return $fetch(URL);
  });
  if (data?.value) list.value = data.value;
</script>

<style lang="less">
.upcoming {
  padding: 100px 0 100px;

  @media @bw1340 {
    padding: 100px 0 100px;
  }

  @media @bw768 {
    padding: 80px 0 43px;
  }

  @media @bw370 {
    padding: 60px 0 100px;
  }

&__container {
     @media @bw370 {
      max-width: 340px;
      padding: 0;
      margin: 0;
     }
    .container();
  }

&__wrapper {
  display: flex;
  position: relative;
  &::before {
    display: block;
     content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 1922px;
    height: 1236px;
      // height: 100%;
      // background-color: rgba(255, 255, 255, 0.6);
    z-index: -1;
    transform: translate(-50%, -50%);
    background-repeat: no-repeat;
    background-size: 1922px 1236px;
    background-image: url(../assets/svg-icons/fon.svg);
    }
  }
}

.swiper {
  margin-left: auto;
  margin-right: auto;
  // max-width: 1414px;
  // max-height: 900px;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  display: block;
}
.swiper-slide {
  height: auto;
  display: flex;
  
}

.swiper--3s {
  width:  100%;
  .swiper-slide {
    // box-sizing: border-box;
    width: calc(33.3333% + 20px);
    min-width: 400px;
    padding-right: 60px;
    @media @bw1660 {
      width: calc(33.3333% + 13.3333px);
      min-width: 320px;
      padding-right: 40px;
    }
    @media @bw1340 {
      width: calc(33.3333% + 10px);
      min-width: 310px;
      padding-right: 30px;
    }
    @media @bw768 {
      width: calc(33.3333% + 6.6666px);
      min-width: 300px;
      padding-right: 20px;
    }
@media @bw370 {
      // width: calc(33.3333% + 2.6666px);
      min-width: 280px;
    //   padding-right: 20px;
    }
     
    &:last-child {
      width: calc(33.3333% + 4px);
      min-width: 280px;
      padding-right: 0;
      @media @bw1660 {
        width: calc(33.3333% - 26.6666px);
      }
      @media @bw1340 {
        width: calc(33.3333% - 20px);
      }
      @media @bw768 {
        width: calc(33.3333% - 13.3333px);
      }
     
    }
    & > * {
      width: 100%;
    }
  }
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  box-sizing: content-box;
}

.swiper-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 530px;
  max-width: 100%;
  margin: 70px auto 0;
  // @media @bw1340 {
  //   width: 300px;
  // }
  @media @bw768 {
    margin: 60px auto 0;
    max-width: 300px;
  }
  @media @bw370 {
    width: 280px;
      margin: 40px 20px 0;
    }
}

.listing {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  

   @media @bw650 {
    width: 100%;
    mmin-width: 280px;
   }

  .container();
  &__link {
    display: inline-flex;
    align-self: flex-end;
    // width: 100%;
    float: right;
    // margin-top: 15px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: 600;
    color: @black;
    line-height: 22px;
    font-family: @font1;
    text-decoration: none;

    transition: color 0.2s;
    @media @bw768 {
      font-size: 14px;
    }
     @media @bw370 {
      font-size: 14px;
      width: 100px;
      margin-top: 35px;
    }

    &:hover {
      color: @red;
      text-decoration-color: @red;
    }
  }
  }

</style>