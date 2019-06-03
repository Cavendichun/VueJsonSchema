<template>
    <div id="jsonSchema">
        <SchemaField
            :schema="$attrs.schema"
            :formData="$attrs.formData"
            :__id="`root`"
         />
    </div>
</template>

<script>
    import SchemaField from './Fields/SchemaField'

    export default {
        name: 'jsonSchema',
        components: {
            SchemaField,
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>

</style>