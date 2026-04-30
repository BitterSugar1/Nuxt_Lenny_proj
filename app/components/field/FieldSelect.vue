<template>
  <div class="field">
    <span v-if="label" class="field__title field-title"> {{ label }} </span>

    <VueMultiselect
      v-model="selected"
      :options="options"
      label="label"
      track-by="value"
      :placeholder="placeholder"
      :searchable="searchable"
      :allowEmpty="allowEmpty"
      selectLabel=""
      selectedLabel=""
      :deselectLabel="allowEmpty ? '⮾' : ''"
      class="field__select"
      @update:modelValue="onSelect"
    />

    <span v-if="errorMessage && submitCount" class="field__error field-error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup>
  import VueMultiselect from "vue-multiselect";
  import "vue-multiselect/dist/vue-multiselect.css";

  import { useField } from "vee-validate";

  const props = defineProps({
    initialValue: {
      default: undefined,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    submitCount: {
      type: Number,
      default: 0,
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    allowEmpty: {
      type: Boolean,
      default: false,
    },
  });

  const selected = ref(
    props.initialValue || props.initialValue === 0
      ? props.options.find((option) => option.value === props.initialValue)
      : undefined,
  );

  const { errorMessage, handleChange } = useField(props.name, props.rules, {
    initialValue: selected.value?.value,
  });

  const onSelect = (option) => {
    handleChange(option.value);
  };
</script>

<style lang="less">
  .field {
    .multiselect {
      min-height: 55px;
      color: @black;

      &--active {
        .multiselect__select {
          transform: none;

          &:before {
            transform: rotate(-45deg);
          }
          &:after {
            transform: rotate(45deg);
          }
        }
      }
      &__select {
        top: 0;
        right: 0;
        height: 55px;
        padding: 0;
        border-radius: 0 5px 5px 0;
        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 8px;
          height: 2px;
          border: none;
          margin: -2px 0 0;
          background-color: @black;
          transition: transform 0.2s;
        }
        &::before {
          right: 27px;
          transform: rotate(45deg);
          @media @bw500 {
            right: 20px;
          }
        }
        &::after {
          right: 22px;
          transform: rotate(-45deg);
          @media @bw500 {
            right: 15px;
          }
        }
      }
      &__tags {
        display: flex;
        align-items: center;
        min-height: 55px;
        padding: 8px 40px 0 20px;
        cursor: pointer;
        @media @bw500 {
          padding: 8px 40px 0 12px;
        }
      }
      &__single {
        padding: 0;
      }
      &__option {
        padding: 12px 20px;

        @media @bw500 {
          padding: 12px;
        }

        &--highlight {
          background-color: @gray;
          color: @black;
        }
        &--selected {
          background-color: @gray_dark;
          color: @black;
          font-weight: 400;
        }
      }
    }
  }
</style>