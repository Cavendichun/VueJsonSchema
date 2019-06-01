import Vue from 'vue';
import TitleField from '../Fields/TitleField';
import {
    SimpleLayout
} from './layout';

const layoutMap = {
    SimpleLayout
}

export const getLayoutBySchema = (schema) => {
    let renderLayout = layoutMap[schema.layout || 'SimpelLayout'] || SimpleLayout;
    return Vue.component('LayoutWrapper', {
        components: {
            renderLayout,
            TitleField
        },
        render() {
            const { children } = this.$slots;
            return (
                <renderLayout>
                    { schema.title == undefined ? null : <TitleField slot="titlefield" title={schema.title} /> }
                    <template slot="children">{children}</template>
                </renderLayout>
            )
        }
    })
}
