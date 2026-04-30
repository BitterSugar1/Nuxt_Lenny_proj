<template>
  <div class="field">
    <label class="field__input-label">
      <span v-if="label" class="field__label field__label--text">
        {{ label }}<template v-if="rules?.required"></template>
      </span>

      <textarea
      class="field__input field__input--text"
        :type="type"
        :placeholder="placeholder"
        v-model="value"
      >
      </textarea>
    </label>

    <span v-if="errorMessage && submitCount" class="field__error field-error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup>
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
    type: {
      type: String,
      default: "text",
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    
    submitCount: {
      type: Number,
      default: 0,
    },
  });

  const { errorMessage, value } = useField(props.name, props.rules, {
    initialValue: props.initialValue,
  });
</script>