<template>
    <div class="json-form-container">
        <template v-if="componentInit">
            <SchemaForm></SchemaForm>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        components: {
            SchemaForm: r => require(['../JsonSchema/JsonSchema.vue'], r)
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
                let _formData = new (require('./formdata.init.js').default)({
                    schema: this.schema,
                    formData: this.formData
                }).getInitFormData();
                this.$data.mainSchema = this.schema,
                    this.$data.mainFormData = _formData,
                        this.$data.mainUiSchema = {},
                            this.$data.componentInit = true;
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
