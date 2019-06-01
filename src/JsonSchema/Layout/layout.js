import Vue from 'vue';

export const SimpleLayout = Vue.component('SimpleLayout', {
    render() {
        const { titlefield, children } = this.$slots;
        return (
            <div class="simple-layout">
                {titlefield}
                {children}
            </div>
        )
    }
})
