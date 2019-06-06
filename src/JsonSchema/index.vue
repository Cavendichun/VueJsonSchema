<template>
    <div id="jsonSchema">
        <SchemaField
            :jsonSchema="jsonSchema"
            :dataSchema="dataSchema"
            :onChange="onChange" 
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
        props: ["jsonSchema", "dataSchema", "onChange", "__id"]
    }
</script>

<style lang="scss" scoped>

</style>