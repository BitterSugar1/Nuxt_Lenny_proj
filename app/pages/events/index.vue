<template>
  <div class="events">
    <div class="events__container">
    <AppListing title="Мероприятия" class="events__listing">
      <EventCard
        v-for="(card, index) in list"
        :key="index"
        :data="card"
        class="app-listing__card"
      />
    </AppListing>
    </div>

    <button type="button" class="more-btn events__more-btn ">
      Показать всё

      <SvgIcon
        class="more-btn__arrow"
        name="arrow_down"
        width="62"
        height="92"
      />
    </button>
  </div>

  <TableEvents/>
  <AppOffers/>
  <OffersMain/>
  <InformationEvents/>

</template>

<script setup>
  const list = ref([]);

  const URL = "http://localhost:3000/json/events.json";

  const { data } = await useAsyncData(`events`, () => {
    return $fetch(URL);
  });
  if (data?.value) list.value = data.value;
</script>

<style lang="less">
  .events {
  padding: 110px 0 100px;

  @media @bw1340 {
    padding: 100px 0 100px;
  }

  @media @bw768 {
    padding: 50px 0 35px;
  }

  &__more-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
      max-width: 1334px;
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      margin-top: 55px;
      border-width: 0;
      @media @bw1340 {
      margin-top: 40px;
      }
      @media @bw370 {
        max-width: 370px;
      }
       &:hover {
    color: @red;
      text-decoration-color: @red;
      background: none;
  }
    }

  &__container {
  .container();

  &__listing {
    display: block;
    margin-bottom: 100px;
  }

  &__services {
    margin-top: 100%;
    margin-bottom: 50px;
  }

  &__span {
    display: flex;
    align-items: center;
    grid-area: span;
    font-family: @font1;
    font-weight: 600;
    font-size: 16px;
    background-color: @black;
    text-decoration: none;
    transition: color 0.2s;
  }
}
}

.arrow {
  flex-shrink: 0;
  position: relative;
  display: inline-block;
  width: 92px;
  height: 60px;
  padding: 0;
  border: none;
  background: none;
  color: @black;
  font-size: 0;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
 
  @media @bw768 {
    width: 67px;
    height: 40px;
  }
  &:active {
    color: @red;
  }
  &:hover {
    @media (hover: hover) {
      color: @red;
    }
  }
  
  &--left {
    .arrow__icon {
      transform: rotate(180deg);
    }
  }
}


.more-btn {
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
    color: @red;
      text-decoration-color: @red;
  }

  &__arrow {
  flex-shrink: 0;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 92px;
  padding: 0;
  border: none;
  background: none;
  color: @black;
  font-size: 0;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
  margin-top: 18px;
 
   @media @bw768 {
    width: 40px;
    height: 67px;
  }
  &:active {
    color: @red;
  }
  &:hover {
    @media (hover: hover) {
      color: @red;
    }
  }
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

    &--centre {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
      max-width: 1334px;
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      @media @bw370 {
        max-width: 370px;
      }
    }
  }
}



</style>