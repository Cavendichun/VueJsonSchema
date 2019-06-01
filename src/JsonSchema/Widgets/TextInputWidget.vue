<template>
    <form-item-component
        :title="schema.title"
        :class="`text-input-widget`"
    >
        <ant-input-component v-model="value" />
    </form-item-component>
</template>

<script>
    import { Input } from 'ant-design-vue';
    import FormItem from '../FormItem';

    export default {
        name: 'TextInputWidget',
        props: {
            schema: { type: Object, required: true },
            formData: { type: String },
            uiSchema: { type: Object },
            __id__: { type: String, required: true },
            onFormDataChange: { type: Function, required: true }
        },
        data() {
            return {
                value: this.$props.formData
            }
        },
        components: {
            'ant-input-component': Input,
            'form-item-component': FormItem
        },
        watch: {
            value(e) {
                this.onFormDataChange && this.onFormDataChange(e == '' ? undefined : e, this.__id__);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
