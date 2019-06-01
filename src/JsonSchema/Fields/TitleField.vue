<template>
    <div class="title-field">
        {{title}}
    </div>
</template>

<script>
    export default {
        name: 'TitleField',
        props: {
            title: { type: String }
        }
    }
</script>

<style lang="less" scoped>
    .title-field {
        height: 45px;
        line-height: 45px;
        font-size: 13px;
        font-weight: bold;
        padding-left: 30px;
        color: #868686;
        border-bottom: 1px solid #f0f2f5;
        margin-bottom: 10px;
    }
</style>
