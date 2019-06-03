<template>
  <div>
    <H3>ObjectField{{schema.title}}</H3>
      <SchemaField
        v-for="(value, name) in schema.properties"
        :key="`${__id}-${name}`"
        :__id="`${__id}-${name}`"
        :schema="value"
        :formData="formData[name]" />
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
    formData: {
      type: Object,
      default: () => { return {} },
    },
    __id: {
      type: String,
      require: true,
    }
  },
  data() {
    return {
    }
  },
  components: {
    SchemaField: resolve => require(['./SchemaField.vue'], resolve)
  },

  mounted() {
    console.count("objectField");
    console.log(this.formData);
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>

</style>