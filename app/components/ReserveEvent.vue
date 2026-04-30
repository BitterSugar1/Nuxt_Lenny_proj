<template>
  <article class="event">
    <div class="event__container">

    <form class="reserve event__reserve">

      <ReserveChecks/>

      <ReserveScheme/>

      <ReserveOrder/>

      <ReserveLegend/>
      
    </form>
</div>
   </article>
</template>

<script setup></script>

<style lang="less">
.event {
  // padding: 40px 0 150px;
  width: 100%;
  display:block;
  align-items: center;
    &__container {
    .container();
  }
}

.reserve {
  display: grid;
  gap: 65px 11%;
  grid-template-columns: 405px 1fr;
  // grid-template-columns: 405px calc(89% - 405px);
  grid-template-areas:
    "checks scheme"
    "order legend";
  width: 100%;
  margin-bottom: 150px;

  @media @bw1340 {
    gap: 65px 6.5%;
    grid-template-columns: 350px 1fr;
  }

  @media @bw1020 {
    gap: 60px;
    grid-template-columns: 1fr 390px;
    grid-template-areas:
      "scheme scheme"
      "checks legend"
      "checks order";
  }

  @media @bw768 {
    grid-template-columns: 100%;
    grid-template-areas:
      "scheme"
      "legend"
      "checks"
      "order";
  }
}
</style>