<template>
    <div id="jsonSchema">
        <SchemaField
            :schema="schema"
            :formData="formData"
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
            // console.log(this.formData);
        }
    }
</script>

<style lang="scss" scoped>

</style>