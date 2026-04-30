<template>
  <form class="subscribe-form" novalidate @submit.prevent="onSubmit">
    <h4 class="subscribe-form__title">
      Подпишись и будь в курсе происходящего
    </h4>

    <div class="subscribe-form__wrapper">
      <div class="subscribe-form__field-wrapper">
        <input
           v-model="email"
          type="email"
          placeholder="Email"
          class="subscribe-form__input"
          required
        />
        <span
          v-if="submitCount && (!email || !emailIsValid)"
          class="subscribe-form__error field-error"
        >
          {{
            email && !emailIsValid
              ? "Email указан неверно"
              : "Это поле обязательно"
          }}
        </span>
      </div>

      <button type="submit" class="subscribe-form__submit">Подписаться</button>
    </div>

    <label class="subscribe-form__check check">
            <input 
            v-model="agreement"
        :true-value="1"
        :false-value="0"
        type="checkbox"
        class="check__input"
        required  
        />

            <span class="check__mark"></span>
            <span class="check__label check__label--s">
              Согласен на обработку персональных данных
            </span>
          </label>

          <span
      v-if="submitCount && !agreement"
      class="subscribe-form__error field-error"
    >
      Это поле обязательно
    </span>

  </form>
</template>

<script setup>
const submitCount = ref(0);

  const email = ref("");
  const agreement = ref(0);

   const emailIsValid = computed(() => {
    return /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,6}$/.test(email.value);
  });

   const onSubmit = () => {
    submitCount.value += 1;
    if (!email.value || !emailIsValid.value || !agreement.value) return;

    console.log({ email: email.value, agreement: agreement.value });
    alert("Подписка оформлена");
  };
</script>

<style lang="less">
  .subscribe-form {
    width: 405px;
    max-width: 100%;

    &__title {
      margin: 0 25px 15px 0;
      font-size: 16px;
      line-height: 22px;
      font-weight: 600;
    font-family: @font1;
    color: @black;
      @media @bw500 {
        margin: 0 0 15px;
        font-weight: 400;
        font-size: 13px;
        line-height: 18px;
      }
      @media @bw370 {
      font-size: 13px;
      font-weight: 400;
    }
    }

    &__wrapper {
    display: flex;
    width: 405px;
    height: 49px;

    @media @bw1340 {
      width: 387px;
    }

    @media @bw370 {
      width: 370px;
      height: 46px;
    }
  }

  &__field-wrapper {
    flex-direction: column;
    width: 270px;

    @media @bw1340 {
      width: 252px;
    }

    @media @bw370 {
      width: 184px;
    }
  }

  &__input {
    box-sizing: border-box;
    font-weight: 400;
    font-size: 14px;
    flex-direction: row;
    width: 270px;
    height: 49px;
    border: 0;
    padding-left: 28px;
    

    @media @bw370 {
      height: 46px;
      width: 370px;
      transform: translateX(-45px);
    }
  }

  &__submit {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    width: 135px;
    height: 49px;
    font-weight: 400;
    font-size: 14px;
    font-family: @font1;
    color: @white;
    background-color: @black;
    padding: 15px 23px;
    z-index: 1;
    transform: translateY(1px);
    cursor: pointer;

    @media @bw370 {
      width: 116px;
      height: 47px;
      font-size: 12px;
      transform: translateX(30px);
    }
  }

  &__check {
    margin-top: 25px;

    @media @bw370 {
      margin-left: 20px;
    }
  }

  &__error {
    display: flex;
    flex-direction: row;
    // margin-bottom: 15px;
    // margin-top: 15px;
    color: @red;
  }
  }


</style>