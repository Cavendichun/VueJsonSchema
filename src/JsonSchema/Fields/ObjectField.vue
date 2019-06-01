<template>
  <div>
    <H3>{{schema.title}}</H3>
    <template v-for="(item) in schema.properties">
      <SchemaField
        :key="`${__id}-${item}`"
        :__id="`${__id}-${item}`"
        :schema="item"
        :formData="formData[item]||{}"
      />
    </template>
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
      default: () => { {} },
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
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>

</style>