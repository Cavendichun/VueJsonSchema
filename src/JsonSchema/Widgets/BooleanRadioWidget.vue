<template>
    <form-item-component
        :title="schema.title"
        :class="`text-input-widget`"
    >
        <radio-group-component v-model="value">
            <radio-component :value="true">是</radio-component>
            <radio-component :value="false">否</radio-component>
        </radio-group-component>
    </form-item-component>
</template>

<script>
    import { Radio } from 'ant-design-vue';
    import FormItem from '../FormItem';

    const RadioGroup = Radio.Group;

    export default {
        name: 'BooleanRadioWidget',
        props: {
            schema: { type: Object, required: true },
            formData: { type: Boolean },
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
            'radio-group-component': RadioGroup,
            'radio-component': Radio,
            'form-item-component': FormItem
        },
        methods: {

        },
        watch: {
            value(e) {
                this.onFormDataChange && this.onFormDataChange(e, this.__id__);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
