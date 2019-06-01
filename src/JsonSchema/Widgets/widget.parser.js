import TextInputWidget from './TextInputWidget.vue'

const widgetMap = {
    string: {
        default: TextInputWidget
    }
}

export const getWidgetBySchema = (schema) => {
    console.log(schema);
    let Widget = widgetMap[schema.type][schema.format || 'default'];
    return Widget;
}
