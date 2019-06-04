<template>
  <div>
    <H3>ObjectField{{jsonSchema.title}}</H3>
      <SchemaField
        v-for="(value, name) in jsonSchema.properties"
        :key="`${__id}-${name}`"
        :__id="`${__id}-${name}`"
        :jsonSchema="value"
        :dataSchema="dataSchema[name]" />
  </div>
</template>

<script>
import { props } from "./common";

export default {
  name: 'object-field',
  props: { ...props(Object) },
  components: {
    SchemaField: resolve => require(['./SchemaField.vue'], resolve)
  },
}
</script>

<style lang="scss" scoped>

</style>