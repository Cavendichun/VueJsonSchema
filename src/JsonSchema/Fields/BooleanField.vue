<template>
  <div class="boolean-field">
    <TitleField 
      :title="jsonSchema.title"
       />
  </div>
</template>

<script>
import { props } from "./common";
import TitleField from './TitleField';

export default {
  name: 'boolean-field',
  props: { ...props(Boolean) },
  components: {
    TitleField,
  }
}
</script>

<style lang="scss" scoped>

</style>