<template>
    <form-item-component
        :title="schema.title"
        :class="`number-input-widget`"
    >
        <number-input-component
            v-model="value"
        />
    </form-item-component>
</template>

<script>
    import { Input } from 'element-ui';
    import { InputNumber } from 'ant-design-vue';
    import FormItem from '../FormItem';

    export default {
        name: 'NumberInputWidget',
        props: {
            schema: { type: Object, required: true },
            formData: { type: Number },
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
            'number-input-component': InputNumber,
            'form-item-component': FormItem
        },
        methods: {

        },
        watch: {
            value(e) {
                if (isNaN(e)) { return false }
                this.onFormDataChange && this.onFormDataChange(e == '' ? undefined : Number(e), this.__id__);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .number-input-widget {
        .ant-input-number {
            width: 100%;
        }
    }
</style>