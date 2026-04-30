<template>
  <section class="events__services">
<h2 class="listing__title section-title section-title__dop">Дополнительные услуги</h2>
<div class="table__container">
<p class="table__paragraph">Перед запуском проекта, мы подготавливаем подробную смету и согласуем ее с клиентом. Убедившись, что все пожеланию учтены и мы можем приступать к реализациии проекта, начинается сложная, но интересная работа, результатом которой будет проведение вашего мероприятия на высшем уровне.</p>
  <table class="events__tariffs-table table">
  <thead class="table__head">
    <tr class="table__head-tr">
      <th class="table__th"></th>
      <th class="table__th">Тариф «Light»</th>
      <th class="table__th">Тариф «Promo»</th>
      <th class="table__th">Тариф «All stars»</th>
    </tr>
  </thead>
  <tbody class="table__body">
    <tr class="table__tr">
      <th class="table__body-th">Стоимость за час</th>
      <td class="table__td">1 000 ₽</td>
      <td class="table__td">3 000 ₽</td>
      <td class="table__td">от 6 000 ₽</td>
    </tr>
    <tr class="table__tr">
      <th class="table__body-th">Ведущий мероприятия</th>
      <td class="table__td"></td>
      <td class="table__td">
        <span class="ok"></span>
      </td>
      <td class="table__td">
        <span class="ok"></span>
      </td>
    </tr>
    <tr class="table__tr">
      <th class="table__body-th">Фотосъемка</th>
      <td class="table__td">
        <span class="ok"></span>
      </td>
      <td class="table__td">
        <span class="ok"></span>
      </td>
      <td class="table__td">
        <span class="ok"></span>
      </td>
    </tr>
    <tr class="table__tr">
      <th class="table__body-th">Видеосъемка</th>
      <td class="table__td"></td>
      <td class="table__td"></td>
      <td class="table__td">
        <span class="ok"></span>
      </td>
    </tr>
    <tr class="table__tr">
      <th class="table__body-th">Организация питания</th>
      <td class="table__td"></td>
      <td class="table__td">
        <span class="ok"></span>
      </td>
      <td class="table__td">
        <span class="ok"></span>
      </td>
    </tr>
    <tr class="table__tr">
      <th class="table__body-th">Декор</th>
      <td class="table__td"></td>
      <td class="table__td"></td>
      <td class="table__td">
        <span class="ok"></span>
      </td>
    </tr>
    <tr class="table__tr">
      <th class="table__body-th">Звуковое сопровождение</th>
      <td class="table__td"></td>
      <td class="table__td">
        <span class="ok"></span>
      </td>
      <td class="table__td">
        <span class="ok"></span>
      </td>
    </tr>
    <tr class="table__tr">
      <th class="table__body-th">Дополнительное освещение</th>
      <td class="table__td"></td>
      <td class="table__td"></td>
      <td class="table__td">
        <span class="ok"></span>
      </td>
    </tr>

    <tr class="table__tr">
      <th class="table__body-th">Клининг</th>
      <td class="table__td"></td>
      <td class="table__td"></td>
      <td class="table__td">
        <span class="ok"></span>
      </td>
    </tr>
  </tbody>

  <tfoot class="table__footer">
    <tr class="table__footer-tr">
      <th class="table__footer-th"></th>
      <th class="table__footer-th">Тариф «Light»</th>
      <th class="table__footer-th">Тариф «Promo»</th>
      <th class="table__footer-th">Тариф «All stars»</th>
    </tr>
  </tfoot>
</table>
</div>
</section>
</template>

<script setup></script>

<style lang="less">
.table {
  width: 100%;
  border-collapse: collapse;
  color: @black;
  text-align: center;
  margin-top: 100px;
  

   &__container {
    .container();
  }
  
  @media @bw768 {
    display: block;
    margin: 0 -20px;
    width: calc(100% + 40px);
  }

  @media @bw370 {
    display: block;
    margin: 0 -20px;
    width: calc(100% - 280px);
  }

  &__paragraph {
    position: relative;
    display: flex;
    margin-bottom: 60px;
    max-width: 868px;
    color: @black;
    text-decoration: none;
    font-family: @font1;
    font-weight: 400;
    font-size: 16px;


    @media @bw1340 {
      width: 829px;
    }

    @media @bw1020 {
      width: 707px;
    }

    // @media @bw960 {
    //   width: 500px;
    // }

    @media @bw768 {
      width: 400px;
    }

    @media @bw600 {
      width: 300px;
    }

    @media @bw400 {
      width: 280px;
    }
  }

  &__head,
  &__body,
  &__footer {
     @media @bw768 {
      display: block;
     }

  }

  &__head-tr{
     @media @bw768 {
      display: flex;
      width: 100%;
     }
  }

  &__tr {
     @media @bw768 {
      display: flex;
      flex-wrap: wrap;
     }
    &:nth-child(2n-1) {
      background-color: fade(@black, 3%);
      @media @bw768 {
        background-color: transparent;
      }
    }
  }
  &__th {
    height: 85px;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
     @media @bw768 {
      font-size: 14px;
      line-height: 19px;
     }
  }
  &__footer-th {
    height: 60px;
    font-size: 0;
    @media @bw768 {
      font-size: 16px;
      font-weight: 300;
    }
  }
  &__th,
  &__footer-th {
    box-sizing: border-box;
    padding: 10px;
    border-right: 1px solid #BFBFBF;
    text-transform: uppercase;
     @media @bw768 {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 33.3333%;
     }
    &:first-child {
      padding-left: 0;
       @media @bw768 {
        display: none;
       }
    }
    &:last-child {
      border-right: none;
      padding-right: 0;
    }
  }
  &__body-th {
    box-sizing: border-box;
    height: 50px;
    padding: 10px 10px 10px 0;
    border-top: 1px solid #BFBFBF;
    border-bottom: 1px solid #BFBFBF;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    text-align: left;
     @media @bw768 {
      display: block;
      width: 100%;
      text-align: center;
      font-weight: 600;
     }
  }
  &__td {
    box-sizing: border-box;
    height: 50px;
    padding: 10px;
    border: 1px solid #BFBFBF;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    @media @bw768 {
      width: 33.3333%;
     }

    &:last-child {
      border-right: none;
      padding-right: 0;
    }
    &:nth-child(2n-1) {
      @media @bw768 {
        background-color: fade(@black, 3%);
      }
    }
  }
  &__footer-tr {
   @media @bw768 {
    display: flex;
   }
  }


.ok {
  display: block;
  position: relative;
  width: 26px;
  height: 26px;
  margin: auto;
  border-radius: 50%;
  background-color: @black;
  &::after {
    content: "";
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 4px;
    left: 9px;
    width: 8px;
    height: 14px;
    border-right: 2px solid @white;
    border-bottom: 2px solid @white;
    transform: rotate(45deg);
  }
}
}

.events {
  padding: 110px 0 100px;

  @media @bw1340 {
    padding: 100px 0 100px;
  }

  @media @bw768 {
    padding: 50px 0 35px;
  }

  // @media @bw370 {
  //   padding: 60px 0 100px;
  // }
&__services {
    
    margin-bottom: 20px;
  }

}

.section-title {

  .width_624();
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 150px;
  min-height: 62px;
  padding: 7px 45px 9px;
  background-color: @black;
  color: @white;
  font-family: @font2;
  font-weight: 500;
  font-size: 36px;
  line-height: 1.28;
  text-align: center;
  text-transform: uppercase;

  @media @bw1340 {
    margin-bottom: 130px;
    padding: 11px 40px;
    max-width: 604px;
  }

  @media @bw768 {
    max-width: 480px;
    padding: 11px 40px 10px;
    margin-bottom: 100px;
    padding: 10px 40px;
    font-size: 20px;
    font-size: 24px;
    min-height: 52px;
  }

  @media @bw600 {
    max-width: 480px;
  }

 

  @media @bw370 {
    margin-bottom: 80px;
    font-size: 16px;
    margin-left: 39px;
    margin-right: 39px;
    padding: 11px 19px 11px;
    min-height: 42px
  }

  &__dop {
    font-weight: 400;
    font-size: 22px;
    padding: none;
    // margin-top: 100px;

     @media @bw500 {
    max-width: 280px;
    min-height: 42px;
     font-size: 16px;
      padding: 0;
  }
  }
}

</style>
