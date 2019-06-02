<template>
    <form-item-component
        :title="schema.title"
        :class="`text-input-widget`"
        :required="required"
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
            required: { type: Boolean },
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
        methods: {
            onChange(e) {
                let _value = e.target.value == undefined ? undefined : e.target.value;
                this.onFormDataChange(_value, this.__id__)
            }
        },
        watch: {
            value(e) {
                this.onFormDataChange && this.onFormDataChange(e == '' ? undefined : e, this.__id__);
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
