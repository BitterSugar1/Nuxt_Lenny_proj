<template>
  <form class="form" @submit="onSubmit">

 <div class="form__list">
      <div class="form__group form__group--w50">
        <FieldRadio
          name="format"
          :options="[
          {
            label: 'Мастер-класс/семинар',
            value: 'seminar',
          },
          {
            label: 'Концерт/выступление',
            value: 'concert',
          },
          {
            label: 'Выставка/показ',
            value: 'show',
          },
          {
            label: 'Другое',
            value: 'other',
          },
        ]"
          :initialValue="'seminar'"
          :rules="{ required: true }"
          :submitCount="submitCount"
          :label="'Формат мероприятия:'"
          class="form__field"
        />
      </div>

<div class="form__group form__group--w50">
        <FieldSelect
          name="amount"
          :options="[
            {
              label: 'до 20 человек',
              value: '20',
            },
            {
              label: 'от 20 до 100 человек',
              value: '100',
            },
            {
              label: 'от 100 до 500 человек',
              value: '500',
            },
            {
              label: 'более 500 человек',
              value: '1000',
            },
          ]"
          :initialValue="'20'"
          :rules="{ required: true }"
          :submitCount="submitCount"
          label="Планируемое количество посетителей:"
          placeholder="Выберите количество"
          class="form__field"
        />

       <FieldDate
          name="date"
          label="Дата проведения:"
          :rules="{ required: true }"
          :submitCount="submitCount"
        />
      
      </div>

      <div class="form__section">
        <h3 class="form__section-title field-title">
          Контакные данные:
        </h3>

        <div class="form__list">
          <FieldInput
            name="first_name"
            label="Имя"
            placeholder="Имя"
            :rules="{ required: true }"
            :submitCount="submitCount"
            class="form__field form__field--w50"
          />

          <FieldInput
            name="last_name"
            label="Фамилия"
            placeholder="Фамилия"
            :rules="{ required: true }"
            :submitCount="submitCount"
            class="form__field form__field--w50"
          />

          <FieldInput
            name="phone"
            label="Телефон"
            placeholder="+7 (###) ###-##-##"
            :rules="{ required: true, phone: true }"
            mask="+7 (###) ###-##-##"
            :submitCount="submitCount"
            class="form__field form__field--w50"
          />

          <FieldInput
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
            :rules="{ required: true, email: true }"
            :submitCount="submitCount"
            class="form__field form__field--w50"
          />
        </div>
      </div>

      <FieldText
      name="text"
            label="Есть пожелания? Напишите нам:"
            type="text"
            :rules="{ required: true }"
            :submitCount="submitCount"
            class="form__field "
      />

    </div>

 <FieldCheck
      name="agreement"
      :rules="{ required: true }"
      :submitCount="submitCount"
      :label="`Я соглашаюсь с <a href='#' target='_blank'>пользовательским соглашением</a> и с <a href='#' target='_blank'>политикой</a> использования персональных данных`"
      smallLabel
      class="form__field"
    />


    <div class="form__btns">
      <button type="submit" class="btn form__submit form__submit--w50">
      Отправить
      </button>

      <button type="button" class="form__close-btn" @click="close">
        Закрыть
      </button>
    </div>
  </form>
</template>

<script setup>
  import { useForm } from "vee-validate";

  const emits = defineEmits(["close"]);

  const { submitCount, handleSubmit } = useForm();

  const close = () => {
    emits("close");
  };

  const onSubmit = handleSubmit((submitValues) => {
    console.log(submitValues);
    alert("Отправлено");

    close();
  });
</script>

<style lang="less">
  .form {
  
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 0px 60px;
    // justify-content: space-between;

     @media @bw370 {
      display: flex;
      flex-direction: column;
    
    }
  }

  &__field,
  &__group {
    margin: 0 0 30px;
    width: 100%;
    &--w50 {
      width: calc(50% - 30px);
       @media @bw370 {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    }
    &--m0 {
      margin: 0;
     }
     &--page-footer {
      width: 270px;
      height: 49px;
      margin-bottom: 15px;
     }
  }


  &__title {
    display: block;
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 700;
     @media @bw370 {
      font-size: 16px;
     }
  }

  &__check-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0 30px;
  }

  &__check {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  &__section {
    margin: 0 0 20px;
  }

  &__section-title {
    margin: 0 0 10px;
    color: @black;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
  }

  &__btns {
    display: flex;
    align-items: center;
    margin-top: 10px;
 @media @bw370 {
      display: flex;
      flex-direction: column;
    }


  }

  &__submit {
    &--w50 {
      width: calc(50% - 30px);
      display: flex;
      justify-content: center;
@media @bw370 {
  width: 100%;
}
      
    }
  }

  &__close-btn {
    margin-left: 226px;
    padding: 4px auto;
    border: none;
    background: transparent;
    color: @black;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: @red;
    }

    @media @bw370{
      margin-top: 30px
    }
    
  }
}
</style>