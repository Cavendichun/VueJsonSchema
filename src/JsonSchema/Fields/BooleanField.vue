<template>
    <div class="boolean-field">
        <component
            :is="renderWidget"
            :schema="schema"
            :formData="formData"
            :uiSchema="uiSchema"
            :__id__="__id__"
            :onFormDataChange="onFormDataChange"
        />
    </div>
</template>

<script>
    import { getWidgetBySchema } from '../Widgets/widget.parser.js';
    import fieldPropsInterFace from './props.interface';

    export default {
        name: 'BooleanField',
        props: fieldPropsInterFace('boolean'),
        data() {
            return {
                renderWidget: getWidgetBySchema(this.schema)
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
