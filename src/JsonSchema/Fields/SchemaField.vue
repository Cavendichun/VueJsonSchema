<template>
    <div class="schema-field">
        <component
            :is="renderField"
            :schema="$attrs.schema"
            :formData="$attrs.formData"
            :uiSchema="$attrs.uiSchema"
            :__id__="$attrs.__id__"
            :required="$attrs.required"
            :onFormDataChange="$attrs.onFormDataChange"
        ></component>
    </div>
</template>

<script>
    import { getTargetFieldBySchema } from './field.parser.js';

    export default {
        name: 'SchemaField',
        data() {
            return {
                renderField: getTargetFieldBySchema(this.$attrs.schema.type)  //根据schema.type动态获取filed
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
