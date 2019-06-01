<template>
    <div class="form-item">
        <div class="title">{{title}} :</div>
        <div class="widget">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormItem',
        props: {
            title: { type: String }
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
        }
        .widget {
            display: inline-block;
            width: 50%;
        }
    }
</style>
