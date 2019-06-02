<template>
    <div class="number-field">
        <component :is="renderLayout">
            <div :slot="`children`">
                <div
                    class="array-item"
                    v-for="(item, index) in formData"
                    :key="itemHash[index]"
                >
                    <span class="order-marker">{{index + 1}}</span>
                    <component
                        :is="getOperationButton(index)"
                    ></component>
                    <schema-field-component
                        :schema="schema.items"
                        :formData="item"
                        :uiSchema="uiSchema"
                        :__id__="`${__id__}[${index}]`"
                        :onFormDataChange="onFormDataChange"
                    />
                </div>
                <button-component
                    v-if="!schema.maxItems || formData.length < schema.maxItems"
                    class="add-button"
                    icon="plus"
                    type="primary"
                    @click="handleAddItem"
                />
            </div>
        </component>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { getWidgetBySchema } from '../Widgets/widget.parser.js';
    import fieldPropsInterFace from './props.interface';
    import { getLayoutBySchema } from '../Layout/layout.parser';
    import { Icon, Button } from 'ant-design-vue';
    import FormDataInit from '../../Form/formdata.init';

    const { typeParser, objectParser } = new FormDataInit();

    export default {
        name: 'ArrayField',
        props: fieldPropsInterFace('array'),
        components: {
            'schema-field-component': r => require(['./SchemaField.vue'], r),
            'button-component': Button
        },
        data() {
            return {
                renderLayout: getLayoutBySchema(this.schema),
                itemHash: []
            }
        },
        beforeMount() {
            this.$data.itemHash = Array.apply(null, Array(this.formData.length)).map((value, index) => index);
        },
        methods: {
            /**
             * 获取每个item的操作按钮
             * @param {number} index 当前item的index
             */
            getOperationButton(index) {
                const { schema, formData } = this.$props, length = formData.length;
                let _this = this;
                return Vue.component('ArrayItemOperationButton', {
                    render() {
                        return (
                            <div class="array-item-operation-group">
                                { index !== 0 && schema.moveable !== false ? <Icon class="btn up" type="up-circle" theme="filled" onClick={e => _this.handleItemMove(e, index, 1)} /> : null }
                                { index < length - 1 && schema.moveable !== false ? <Icon class="btn down" type="down-circle" theme="filled" onClick={e => _this.handleItemMove(e, index, -1)} /> : null }
                                { schema.minItems < length ? <Icon class="btn close" type="close-circle" theme="filled" onClick={(e) => {_this.handleDeleteItem(e, index)}} /> : null }
                            </div>
                        )
                    }
                })
            },
            /**
             * 点击添加按钮时
             */
            handleAddItem() {
                let _max = Math.max.apply(null, this.$data.itemHash) + 1;
                this.$data.itemHash.push(_max);
                let _formData = JSON.parse(JSON.stringify(this.$props.formData));
                const { items } = this.$props.schema;
                let newDefault = items.type == 'object' ? objectParser({ schema: items.properties }) || {} : typeParser[items.type]({ schema: items }) || null;
                _formData.push(newDefault);
                this.$props.onFormDataChange && this.$props.onFormDataChange(_formData, this.$props.__id__);
            },
            /**
             * 点击删除按钮
             * @param {number} index 当前item的index
             */
            handleDeleteItem(e, index) {
                let _formData = JSON.parse(JSON.stringify(this.$props.formData));
                this.$data.itemHash.splice(index, 1);
                _formData.splice(index, 1);
                this.$props.onFormDataChange && this.$props.onFormDataChange(_formData, this.$props.__id__);
            },
            /**
             * 点击上下按钮
             * @param {number} index 当前item的index
             * @param {number} dirc 方向
             */
            handleItemMove(e, index, dirc) {
                let _formData = JSON.parse(JSON.stringify(this.$props.formData));
                [_formData[index], _formData[index - dirc]] = [_formData[index - dirc], _formData[index]];
                [this.itemHash[index], this.itemHash[index - dirc]] = [this.itemHash[index - dirc], this.itemHash[index]];
                this.$props.onFormDataChange && this.$props.onFormDataChange(_formData, this.$props.__id__);
            }
        }
    }
</script>

<style lang="less" scope>
    .array-item {
        margin: 20px;
        padding: 15px;
        border: @border-base;
        position: relative;
        .order-marker {
            font-size: 50px;
            position: absolute;
            font-weight: bold;
            top: -8px;
            left: 7px;
            color: #e8e8e8;
        }
        .array-item-operation-group {
            position: absolute;
            top: -12px;
            right: -6px;
            .anticon {
                font-size: 12px !important;
                margin-left: 5px !important;
                cursor: pointer;
                &.close:hover {
                    color: red;
                }
                &.up:hover, &.down:hover {
                    color: @primary-color
                }
            }
        }
    }

    .add-button {
        margin-left: 20px;
    }
</style>