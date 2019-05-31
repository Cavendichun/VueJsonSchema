<template>
    <div class="app">
        <Form :schema="schema" :formData="formData"></Form>
    </div>
</template>

<script>
    import { schema, formData } from '../mockData';
    import Form from './Form/Form';

    export default {
        name: 'App',
        components: {
            Form: r => require(['./Form/Form.vue'], r)
        },
        data() {
            return {
                schema: schema,
                formData: formData
            }
        }
    }
</script>

<style lang="less">
    @import url('./app.less');
</style>