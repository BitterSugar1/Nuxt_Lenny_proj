<template>

<div class="reserve__checks">
    <h4 class="reserve__section-title">
      Забронировать столик
    </h4>

    <div class="reserve__book">
    <FieldCheck
      name="agreement"
      :rules="{ required: true }"
      :submitCount="submitCount"
      :label="'1 стол'"
      smallLabel
      class="reserve__check check check--red"
    />
    <FieldCheck
      name="agreement"
      :rules="{ required: true }"
      :submitCount="submitCount"
      :label="'2 стол'"
      smallLabel
      class="reserve__check check"
    />
    <FieldCheck
      name="agreement"
      :rules="{ required: true }"
      :submitCount="submitCount"
      :label="'3 стол'"
      smallLabel
      class="reserve__check check"
    />
    <FieldCheck
      name="agreement"
      :rules="{ required: true }"
      :submitCount="submitCount"
      :label="'4 стол'"
      smallLabel
      class="reserve__check check check--red"
    />
    <FieldCheck
      name="agreement"
      :rules="{ required: true }"
      :submitCount="submitCount"
      :label="'5 стол'"
      smallLabel
      class="reserve__check check check--disabled"
    />
    <FieldCheck
      name="agreement"
      :rules="{ required: true }"
      :submitCount="submitCount"
      :label="'6 стол'"
      smallLabel
      class="reserve__check check"
    />
    <FieldCheck
      name="agreement"
      :rules="{ required: true }"
      :submitCount="submitCount"
      :label="'7 стол'"
      smallLabel
      class="reserve__check check check--red"
    />
    <FieldCheck
      name="agreement"
      :rules="{ required: true }"
      :submitCount="submitCount"
      :label="'8 стол'"
      smallLabel
      class="reserve__check check check--red"
    />
    <FieldCheck
      name="agreement"
      :rules="{ required: true }"
      :submitCount="submitCount"
      :label="'9 стол'"
      smallLabel
      class="reserve__check check check--red"
    />
    <FieldCheck
      name="agreement"
      :rules="{ required: true }"
      :submitCount="submitCount"
      :label="'10 стол'"
      smallLabel
      class="reserve__check check"
    />
    <FieldCheck
      name="agreement"
      :rules="{ required: true }"
      :submitCount="submitCount"
      :label="'11 стол'"
      smallLabel
      class="reserve__check check"
    />
    </div>
  </div>

  

 <!-- <div class="reserve__checks">
    <h4 class="reserve__section-title">
      Забронировать столик
    </h4>

    <div class="reserve__book">
    <label class="reserve__check check check--red">
      <input
        type="checkbox"
        name="table_1"
        class="check__input"
      />
      <span class="check__mark"></span>
      <span class="check__label">1 стол</span>
    </label>

    <label class="reserve__check check">
      <input
        type="checkbox"
        name="table_2"
        class="check__input"
      />
      <span class="check__mark"></span>
      <span class="check__label">2 стол</span>
    </label>

   <label class="reserve__check check">
      <input
        type="checkbox"
        name="table_3"
        class="check__input"
      />
      <span class="check__mark"></span>
      <span class="check__label">3 стол</span>
    </label>

    <label class="reserve__check check check--red">
      <input
        type="checkbox"
        name="table_4"
        class="check__input"
      />
      <span class="check__mark"></span>
      <span class="check__label">4 стол</span>
    </label>

   <label class="reserve__check check check--disabled">
      <input
        type="checkbox"
        name="table_5"
        class="check__input"
        disabled
      />
      <span class="check__mark"></span>
      <span class="check__label">5 стол </span>
    </label>

    <label class="reserve__check check">
      <input
        type="checkbox"
        name="table_6"
        class="check__input"
      />
      <span class="check__mark"></span>
      <span class="check__label">6 стол</span>
    </label>

    <label class="reserve__check check check--red">
      <input
        type="checkbox"
        name="table_7"
        class="check__input"
      />
      <span class="check__mark"></span>
      <span class="check__label">7 стол</span>
    </label>

    <label class="reserve__check check check--red">
      <input
        type="checkbox"
        name="table_8"
        class="check__input"
      />
      <span class="check__mark"></span>
      <span class="check__label">8 стол</span>
    </label>

    <label class="reserve__check check check--red">
      <input
        type="checkbox"
        name="table_9"
        class="check__input"
      />
      <span class="check__mark"></span>
      <span class="check__label">9 стол</span>
    </label>

    <label class="reserve__check check">
      <input
        type="checkbox"
        name="table_10"
        class="check__input"
      />
      <span class="check__mark"></span>
      <span class="check__label">10 стол</span>
    </label>

    <label class="reserve__check check">
      <input
        type="checkbox"
        name="table_11"
        class="check__input"
      />
      <span class="check__mark"></span>
      <span class="check__label">11 стол</span>
    </label>
   
    
    </div>
  </div> -->
</template>

<script setup>
// const reserve = $("#js-reserve");
// if (reserve.length) {
//   const reservePrice = JSON.parse(reserve.attr("data-price"));
//   const reserveTypes = Object.keys(reservePrice);
//   const reserveTicketData = {};

//   const reserveCheck = reserve.find(".js-reserveCheck");
//   const reserveScene = reserve.find("#js-reserveScene");

//   const reservePriceList = reserve.find("#js-reservePriceList");
//   const reservePriceCaption = reservePriceList.attr("data-caption");

//   const reserveTicketsList = reserve.find("#js-reserveTicketsList");
//   const reserveTicketsCaption = reserveTicketsList.attr("data-caption");
//   const reserveTicketsCurrency = reserveTicketsList.attr("data-caption");

//   const reserveTotal = reserve.find("#js-reserveTotal");
//   const reserveSubmit = reserve.find("#js-reserveSubmit");

//   const sumReserve = function () {
//     let total = 0;

//     reserveTypes.forEach(function (type) {
//       const qty = reserveTicketData[type].qty;
//       const sum = reserveTicketData[type].qty * reservePrice[type];
//       reserveTicketData[type].qtyE1.html(qty);
//       reserveTicketData[type].sumE1.html(numberWithSpaces(sum));
//       total += sum;
//     });

//     reserveTotal.html(numberWithSpaces(total));

//     if (total > 0) {
//       reserveSubmit.removeClass("btn--disabled");
//     } else {
//       reserveSubmit.addClass("btn--disabled");
//     }
//   };

//     reserveTypes.forEach(function (type) {
//       reservePriceList.append(
//          `<div class="reserve__price-item reserve__price-item--${type}" "data-caption="${reservePriceCaption}>
//         ${reservePrice[type]} + 
//         </div>`
//       );

//       const reserveTicketsE1 = $(`<div class="reserve__tickets">`);
//       const reserveQtyE1 = $(
//         `<div class="reserve__qty" data-caption="${reserveTicketsCaption}" data-price="${reservePrice[type]}">`
//       );
//       const reserveSumE1 = $(
//         `<div class="reserve__sum" data-currency="${reserveTicketsCurrency}">`
//       );

//       reserveTicketsE1.append(reserveQtyE1);
//       reserveTicketsE1.append(reserveSumE1);

//       reserveTicketsList.append(reserveTicketsE1);

//       reserveTicketData[type] = {};
//       reserveTicketData[type].qty = 0;
//       reserveTicketData[type].qtyE1 = reserveQtyE1;
//       reserveTicketData[type].sumE1 = reserveSumE1;
//     });

//     $.each(reserveCheck, function (i) {
//       const check = this;
//       const name = $(check).attr("name");
//       if (!name) return;
//       const sceneTable = reserveScene.find("[data-check=" + name + "]");
//       if ($(this).attr("disabled")) {
//         sceneTable.addClass("scene__table--disabled");
//         return;
//       }

//       const type = $(check).attr("data-type") || "black";

//       if (check.checked) {
//         reserveTicketsData[type].qty += 1;
//         sceneTable.addClass("scene__table--active");
//       }

//       $(check).on("change", function () {
//         if (this.checked) {
//           reserveTicketsData[type].qty += 1;
//           sceneTable.addClass("scene__table--active");
//         } else {
//           if (reserveTicketsData[type].qty > 0) 
//             reserveTicketsData[type].qty -= 1;
//           sceneTable.removeClass("scene__table--active");
//         }

//         sumReserve();
//       });

//       sceneTable.on("click", function () {
//         check.checked = !check.checked;
//         $(check).trigger("change");
//       });
//     });

//     sumReserve();

//   }
</script>

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
    padding-left: 0;
  }

  &__reserve>div {
    box-sizing: border-box;
    padding: 10px;
    background-color: coral;
    text-align: center;
  }
}


</style>