<template>
  <div>
    stringField: 
    {{schema.title}}
  </div>
</template>

<script>
export default {
  name: 'stringField',
  props: {
    schema: {
      type: Object,
      require: true,
    },
    formData: {
      type: String,
      default: ()=>{ return `` },
    },
    __id: {
      type: String,
      require: true,
    }
  },
  mounted() {
    console.count(`stringField`);
    console.log(this.formData);
  }
}
</script>

<style lang="scss" scoped>

</style>