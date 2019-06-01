<template>
  <div>
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
    // formData,
    // __id: {
    //   type: String,
    //   require: true,
    // }
  },
  mounted() {
    // console.log(this.formData);
  }
}
</script>

<style lang="scss" scoped>

</style>