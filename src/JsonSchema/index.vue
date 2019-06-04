<template>
    <div id="jsonSchema">
        <SchemaField
            v-bind="$attrs"
            :__id="`root`"
         />
    </div>
</template>

<script>
    import SchemaField from './Fields/SchemaField'

    export default {
        name: 'json-schema',
        components: {
            SchemaField,
        },
    }
</script>

<style lang="scss" scoped>

</style>