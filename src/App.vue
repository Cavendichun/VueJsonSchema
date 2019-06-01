<template>
  <div class="app">
    <JsonSchema v-if="componentInit" :schema="schema" :formData="formData"/>
    <div v-else>loading ...</div>
  </div>
</template>

<script>
import { schema, formData } from "../mockData";
import { transDefData } from "./Form/formData.init";
import formateCheck from "./Form/formateCheck";
import JsonSchema from "./JsonSchema/index.vue";
import _ from "lodash";

export default {
  name: "App",
  components: {
    // Form: r => require(['./Form/Form.vue'], r)
  },
  data() {
    return {
      componentInit: false,
      schema: null,
      formData: null
    };
  },
  components: {
    JsonSchema
  },
  mounted() {
    let { defFormData } = transDefData(schema);
    this.schema = schema;
    this.componentInit = true;
  },
  computed: {},
  methods: {}
};
</script>

<style lang="less">
</style>