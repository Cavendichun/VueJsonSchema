<template>
  <div>
    <component 
      :is="renderField"
      :schema="schema"
      :formData="formData"
      :__id="__id" />
  </div>
   
</template>

<script>
import StringField from "./StringField";
import NumberField from "./NumberField";
import ObjectField from "./ObjectField";
import ArrayField from "./ArrayField";
import BooleanField from "./BooleanField";
import _ from 'lodash';

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
    },
    formData: {
      default: ()=>{ return {} },
    },
    __id: {
      type: String,
      require: true,
    }
  },
  data() {
    return ({
      renderField: null,
    })
  },
  mounted() {
    this.renderField = fieldMap[this.schema.type];
    console.count(`schemaField`)
    console.log(this.formData);
  }
};
</script>
