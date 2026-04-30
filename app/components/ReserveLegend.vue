<template>
  <div class="reserve__legend">

  <h4 class="reserve__section-title-right">Стоимость пригласительного билета</h4>

  <div class="reserve__cost-list">
    <div class="reserve__cost">
      <SvgIcon
        class="reserve__icon"
        name="rectangle_red"
        width="24"
        height="24"
      />
      <div class="reserve__qty-right" data-caption="персона" data-price="1400 ₽">1</div>
       <SvgIcon
        class="reserve__icon"
        name="rectangle_black"
        width="24"
        height="24"
      />
      <div class="reserve__qty-right" data-caption="персона" data-price="1250 ₽">1</div>
    </div>
  </div>

  <h4 class="reserve__section-title-ps">Примечание</h4>
  <div class="reserve__tickets-list">
    <div class="reserve__tickets-right">
      <SvgIcon
        class="icon--black"
        name="ellipse_black"
        width="24"
        height="24"
      />
      <SvgIcon
        class="reserve__icon--red"
        name="ellipse_red"
        width="24"
        height="24"
      />
      <div class="reserve__available">доступные места</div>
    </div>
    <div class="reserve__tickets-right">
      <SvgIcon
        class="reserve__icon reserve__icon--gray"
        name="ellipse_gray"
        width="24"
        height="24"
      />
      <div class="reserve__booked">забронировано</div>
    </div>

</div>
</div>
</template>

<script setup></script>

<style lang="less">
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

  &__book {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 23px;
    // padding-left: 23px;

    // color: @black;
    // cursor: pointer;

    // &:last-child {
    //   margin-bottom: 0;
    // }

  }

  &__checks {
    grid-area: checks;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // background-color: yellow;
  }

  &__check {
    margin-top: 0;
    margin-bottom: 10px;
  }

  &__scheme {
    grid-area: scheme;
    
    // background-color: rgb(255, 162, 0);
  }

  &__order {
    grid-area: order;
    // background-color: rgb(76, 0, 255);
  }

  &__legend {
    grid-area: legend;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    // background-color: rgb(255, 0, 81);
  }

  &__reserve>div {
    box-sizing: border-box;
    padding: 10px;
    background-color: coral;
    text-align: center;
  }

  &__scheme-wrapper {
    position: relative;
    width: 100%;

    &::after {
      content: "";
      display: block;
      width: 100%;
      padding-top: 51.15384%;
    }
  }

  &__scene {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

&__scheme-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 40px;
  width: 162px;
  height: 34px;
  
  background-color: @black;
  color: @white;
  font-family: @font1;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
}

  &__tickets {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
&__tickets-right {
display: flex;
    justify-content: flex-end;
}


  &__qty {
    display: block;
    margin-bottom: 16px;
    width: 108px;
    color: @black;
    font-family: @font1;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    &::after {
      content: " " attr(data-caption) " | " attr(data-price);
    }
  }

  &__qty-right {
    box-sizing: border-box;
    position: relative;
    display: block;
    text-align: right;
    margin-bottom: 15px;
    width: 128px;
    color: @black;
    font-family: @font1;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;

    &::after {
      content: " " attr(data-caption) " | " attr(data-price);
    }
  }

&__available {
  display: flex;
    justify-content: flex-end;
    margin-bottom: 18px;
    margin-top: 0;
    width: 128px;
    color: @black;
    font-family: @font1;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
}

&__booked {
  display: flex;
    justify-content: flex-end;
    margin-bottom: 18px;
    margin-top: 0;
    width: 128px;
    color: @black;
    font-family: @font1;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
}

  
  &__sum {
    &::after {
      content: attr(data-currency);
      margin-left: 4px;
      font-size: 0.95em;
    }
  }

  &__total {
    text-align: center;
    display: block;
    margin-bottom: 53px;
    margin-top: 10px;
    width: 405px;
    color: @black;
    font-family: @font1;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;

    &::before {
      content: attr(data-caption);
      margin-right: 30px;
    }

    &::after {
      content: attr(data-currency);
      margin-left: 4px;
      font-size: 0.95em;
    }
  }

  &__order {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    // align-items: flex-start;
    min-height: 23px;
  }

  &__section-title {
    align-items: flex-start;
    display: block;
    margin-bottom: 20px;
    width: 405px;
    color: @black;
    font-family: @font1;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
  }

  &__section-title-ps {
    margin-bottom: 23px;
    width: 118px;
    color: @black;
    font-family: @font1;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
  }


&__section-title-right {
    margin-bottom: 20px;
    width: 355px;
    color: @black;
    font-family: @font1;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    
  }

  &__submit {
    align-items: flex-start;
    display: block;
    border: 2px;
    border-color: @red;
    margin-top: 0;
    max-width: 405px;
    width: 100%;
    height: 52px;
    font-family: @font1;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

  }
  &__cost-list {
    display: flex;
    justify-content: flex-end;
  }

  &__icon {
    display: flex;
    position: absolute;
    transform: translateX(-37px);

    &--gray {
      color: #bfbfbf;
      transform: translateX(-137px);
    }

    &--red {
color: rgba(188, 51, 36, 1);
transform: translateX(-10px);
    }

    &--black {
      color: rgba(31, 30, 30, 1);
      transform: translateX(2px);
    }
  }
}
</style>