<template>
  <div class="number-field">
    <TitleField 
      :title="jsonSchema.title" />
    <Input
      :defaultData="dataSchema"
      :onChange="onChange"
      :__id="__id" />
  </div>
</template>

<script>
import { props } from "./common";
import TitleField from './TitleField';
import Input from '../../wigets/numberInputWiget';

export default {
  name: 'number-field',
  props: { ...props(String) },
  components: {
    TitleField,
    Input,
  }
}
</script>

<style lang="scss" scoped>

</style>