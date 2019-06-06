<template>
  <div class="object-field">
      <TitleField :title="jsonSchema.title" />
      <SchemaField
        v-for="(value, name) in jsonSchema.properties"
        :key="`${__id}-${name}`"
        :__id="`${__id}-${name}`"
        :jsonSchema="value"
        :dataSchema="dataSchema[name]"
        :onChange="onChange"
         />
  </div>
</template>

<script>
import { props } from "./common";
import TitleField from './TitleField';

export default {
  name: 'object-field',
  props: { ...props(Object) },
  components: {
    SchemaField: resolve => require(['./SchemaField.vue'], resolve),
    TitleField,
  },
}
</script>

<style lang="scss" scoped>

</style>