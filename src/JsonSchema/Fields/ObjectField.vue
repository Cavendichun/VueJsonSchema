<template>
    <div class="object-field">
        <component :is="renderLayout">
            <div :slot="`children`">
                <SchemaField
                    v-for="(value, name) in schema.properties"
                    :key="name"
                    :schema="value"
                    :formData="formData[name]"
                    :uiSchema="uiSchema"
                    :__id__="`${__id__}.${name}`"
                    :required="(schema.required || []).indexOf(name) != -1"
                    :onFormDataChange="onFormDataChange"
                />
            </div>
        </component>
    </div>
</template>

<script>
    import { getLayoutBySchema } from '../Layout/layout.parser';
    import fieldPropsInterFace from './props.interface';

    export default {
        name: 'ObjectField',
        props: fieldPropsInterFace('object'),
        components: {
            SchemaField: r => require(['./SchemaField.vue'], r)
        },
        data() {
            return {
                renderLayout: getLayoutBySchema(this.schema)
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
