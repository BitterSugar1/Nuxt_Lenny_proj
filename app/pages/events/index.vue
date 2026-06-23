<template>
  <div>
  <div class="events">
    <div class="events__container">
      <AppListing title="Мероприятия" class="events__listing">
        <EventCard
          v-for="(card, index) in eventsFeed"
          :key="index"
          :data="card"
          class="app-listing__card"
        />
      </AppListing>
    </div>

    <button
      type="button"
      class="more-btn events__more-btn"
      style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:auto;max-width:none;margin:55px auto 0;padding:0;border:none;background:transparent;box-shadow:none;text-align:center;"
    >
      Показать всё
      <SvgIcon
        class="more-btn__arrow"
        name="arrow_down"
        width="62"
        height="92"
      />
    </button>
  </div>

  <TableEvents />
  <AppOffers />
  <InformationEvents />
  </div>
</template>

<script setup>
const { data: eventsFeed } = await useJsonCollection("events-list", "/json/events.json");
</script>

<style scoped lang="less">
.events {
  padding: 110px 0 100px;

  @media @bw1340 {
    padding: 100px 0;
  }

  @media @bw768 {
    padding: 50px 0 35px;
  }

  &__container {
    .container();
  }

  &__listing {
    display: block;
    margin-bottom: 100px;
  }

  &__more-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: fit-content;
    max-width: 100%;
    margin: 55px auto 0;
    padding: 0;
    text-align: center;
    border: none;
    background: transparent;
    box-shadow: none;

    @media @bw1340 {
      margin-top: 40px;
    }

    @media @bw370 {
      width: fit-content;
    }
  }
}

</style>
