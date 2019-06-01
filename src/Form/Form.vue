<template>
    <div class="json-form-container">
        <template v-if="componentInit">
            <SchemaForm 
                :schema="mainSchema" 
                :formData="mainFormData" 
                :uiSchema="mainUiSchema"
                :onFormDataChange="onFormDataChange"
            ></SchemaForm>
        </template>
    </div>
</template>

<script>
    import SchemaForm from '../JsonSchema/JsonSchema';
    import FormDataIniter from './formdata.init.js';
    import Vue from 'vue';

    export default {
        name: 'Form',
        components: {
            SchemaForm
        },
        props: {
            schema: { type: Object, required: true },
            formData: { type: Object, default: () => { return {} } },
            uiSchema: { type: Object, default: () => { return {} } }
        },
        data() {
            return {
                mainSchema: null,
                mainFormData: null,
                mainUiSchema: null,
                componentInit: false
            }
        },
        mounted() {
            this.getInitFormConfig()
        },
        methods: {
            /**
             * 根据props的formData和schema,获取一份表单的初始数据
             */
            getInitFormConfig() {
                let _formData = new FormDataIniter({
                    schema: this.schema,
                    formData: this.formData
                }).getInitFormData();
                this.$data.mainSchema = this.schema,
                    this.$data.mainFormData = _formData,
                        this.$data.mainUiSchema = {},
                            this.$data.componentInit = true;
            },
            /**
             * 根据路径和value，局部修改formData中某一块的数据
             */
            onFormDataChange(value, path) {
                let _path = path.split('.').splice(1).join('.');
                _.set(this.$data.mainFormData, _path, value);
            }
        }
    }
</script>

<style lang="less">
    @import url('../Style/reset.less');
</style>

<style lang="less" scoped>
    .json-form-container {
        width: 900px;
        height: 500px;
        margin: 0 auto;
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
</style>
