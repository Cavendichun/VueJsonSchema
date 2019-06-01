<template>
  <div>
    <H3>{{schema.title}}</H3>
    <component :is="SchemaField" 
      v-bind="Object.assign()"
    />
  </div>
</template>

<script>


export default {
  name: 'objectField',
  props: {
    schema: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      SchemaField: null,
    }
  },

  mounted() {
    (() => {
      return new Promise(  (resolve) => {
        return require(['./SchemaField.vue'], resolve);
      })
    })().then(
      (data) => {
        this.SchemaField = data;
      }
    )
  }
}
</script>

<style lang="scss" scoped>

</style>