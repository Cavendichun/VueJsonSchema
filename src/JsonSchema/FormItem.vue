<template>
    <div class="form-item">
        <div class="title">
            <span class="required-marker" v-if="required == true">*</span>
            {{title}} :
        </div>
        <div class="widget">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormItem',
        props: {
            title: { type: String },
            required: { type: Boolean }
        }
    }
</script>

<style lang="less" scoped>
    .form-item {
        height: 50px;
        .title {
            display: inline-block;
            width: 30%;
            height: 100%;
            line-height: 50px;
            text-align: right;
            padding-right: 50px;
            .required-marker {
                color: red;
                font-size: 15px;
                margin-right: 5px;
            }
        }
        .widget {
            display: inline-block;
            width: 50%;
        }
    }
</style>
