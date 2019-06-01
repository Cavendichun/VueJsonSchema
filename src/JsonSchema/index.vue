<template>
    <div id="jsonSchema">
        <SchemaField
            :schema="schema"
            :formData="formData"
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
        props: {
            schema: {
                type: Object,
                required: true,
            },
            formData: {
                type: Object,
                default: () => { return {} } ,
            },
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>

</style>