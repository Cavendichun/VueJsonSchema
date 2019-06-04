<template>
  <component
    :is="renderField"
    :jsonSchema="jsonSchema"
    :dataSchema="$attrs.dataSchema"
    :__id="__id"
  />
</template>

<script>
import StringField from "./StringField";
import NumberField from "./NumberField";
import ObjectField from "./ObjectField";
import ArrayField from "./ArrayField";
import BooleanField from "./BooleanField";

export default {
  name: "schema-field",
  props: {
    jsonSchema: {
      type: Object,
      require: true
    },
    __id: {
      type: String,
      require: true
    }
  },
  computed: {
    renderField: function() {
      const Field = {
                object: ObjectField,
                string: StringField,
                number: NumberField,
                array: ArrayField,
                boolean: BooleanField
            }[this.jsonSchema.type];
      return Field;
    }
  }
};
</script>
