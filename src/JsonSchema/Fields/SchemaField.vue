<template>
  <div>
    <component :is="renderField"
      v-bind="Object.assign(this.$props, this.$attrs)"
    />
  </div>
   
</template>

<script>
import StringField from "./StringField";
import NumberField from "./NumberField";
import ObjectField from "./ObjectField";
import ArrayField from "./ArrayField";
import BooleanField from "./BooleanField";
import Vue from "vue";

const fieldMap = {
        object: ObjectField,
        string: StringField,
        number: NumberField,
        array: ArrayField,
        boolean: BooleanField
      }

export default {
  name: "schemaField",
  props: {
    schema: {
      type: Object,
      require: true,
    }
  },
  data() {
    return ({
      renderField: fieldMap[this.schema.type],
    })
  },
  mounted() {
    // console.log(this.$attrs);
  }
};
</script>
