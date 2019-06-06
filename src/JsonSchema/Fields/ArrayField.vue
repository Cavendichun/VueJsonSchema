<template>
  <div class="array-items">
    <!-- <SchemaField
        v-for="(value, index) in dataSchema"
        :key="`${__id}-${index}`"
        :__id="`${__id}-${index}`"
        :jsonSchema="jsonSchema.item"
        :dataSchema="value"
        :onChange="handleChange.bind(index)" /> -->
    <!-- <div class="item-handle">
      <template v-if="jsonSchema.moveAble">
        <span class="up"
          @click="moveItem({derect: `up`, index})">
          up
        </span>
        <span class="down"
          @click="moveItem({derect: `up`, index})"> >
          down
        </span>
      </template>
      <span class="delete"
        @click="deleteItem(index)" >
        del
      </span>
    </div>
    </template> -->
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
  methods: {
    handleChange( index ) {
      console.log(index);
    }
  },
  created() {
    console.log(this.$props);
  }
};
</script>

<style lang="scss" scoped>
</style>