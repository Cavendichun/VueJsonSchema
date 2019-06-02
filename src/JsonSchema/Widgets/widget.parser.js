import TextInputWidget from './TextInputWidget.vue';
import NumberInputWidget from './NumberInputWidget.vue';
import BooleanRadioWidget from './BooleanRadioWidget.vue';

const widgetMap = {
    string: {
        default: TextInputWidget
    },
    number: {
        default: NumberInputWidget
    },
    boolean: {
        default: BooleanRadioWidget
    }
}

export const getWidgetBySchema = (schema) => {
    console.log(schema);
    let Widget = widgetMap[schema.type][schema.format || 'default'];
    return Widget;
}
