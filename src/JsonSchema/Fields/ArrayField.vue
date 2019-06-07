<template>
  <div class="array-items">
    <SchemaField
        v-for="(value, index) in dataSchema"
        :key="`${__id}-${index}`"
        :__id="`${__id}-${index}`"
        :jsonSchema="jsonSchema.items"
        :dataSchema="value"
        :onChange="handleChange.bind(index)" /> 
  </div>
</template>

<script>
import {props} from './common';
import _ from 'lodash'

export default {
  name: 'array-firld',
  props: { ...props(Array) },
  components: {
    SchemaField: resolve => require(['./SchemaField.vue'], resolve),
  },
  created() {
  },
  methods: {
    handleChange( index ) {
      console.log(index);
    },
    
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
</style>