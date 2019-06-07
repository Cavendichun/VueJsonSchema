<template>
  <JsonSchema 
    :jsonSchema="jsonSchema"
    :dataSchema="newDataSchema"
    :onChange="handleDataSchemaChange" />
</template>

<script>
  import JsonSchema from '../JsonSchema/index'
  import SchemaDataParser from './DataSchema.init';
  import _ from 'lodash';

  export default {
    name: 'my-form',
    props: {
      jsonSchema: {
        type: Object,
        require: true,
      },
      dataSchema: {
        type: Object,
        default: ()=>{ return {} },
      }
    },
    components: {
      JsonSchema,
    },
    computed: {
      newDataSchema: function () {
        const _dataSchema = SchemaDataParser(this.jsonSchema);
        return _.merge({ ...this.dataSchema }, _dataSchema);
      }
    },
    created() {
      // console.log(this.$props);
    },
    methods: {
      handleDataSchemaChange({value, __id}) {
        const {dataSchema} = this;
        let path = __id.split('-').slice(1);
        _.set(dataSchema, path, value);

        this.dataSchema = dataSchema;
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>