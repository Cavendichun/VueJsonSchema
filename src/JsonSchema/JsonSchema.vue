<template>
    <div class="json-schema-container">
        <SchemaField
            :schema="schema"
            :formData="formData"
            :uiSchema="uiSchema"
            :__id__="`$root`"
            v-bind="$attrs"
        ></SchemaField>
    </div>
</template>

<script>
    import SchemaField from './Fields/SchemaField';

    export default {
        name: 'JsonSchema',
        components: {
            SchemaField
            // SchemaField: r => require(['./Fields/SchemaField.vue'], r)
        },
        props: {
            schema: { type: Object, required: true },
            formData: { type: Object, default: () => { return {} } },
            uiSchema: { type: Object, default: () => { return {} } }
        }
    }
</script>

<style lang="scss" scoped>
    .json-schema-container {
        font-size: 14px;
    }
</style>
