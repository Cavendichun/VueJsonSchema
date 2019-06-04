<template>
  <div>
    stringField: 
    {{jsonSchema.title}}
  </div>
</template>

<script>
import { props } from "./common";

export default {
  name: 'string-field',
  props: { ...props(String) },
}
</script>

<style lang="scss" scoped>

</style>