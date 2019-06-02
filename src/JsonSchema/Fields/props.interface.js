const fieldPropsInterFace = (type) => {
    return {
        schema: {
            type: Object,
            required: true
        },
        formData: {
            default: () => {
                return {
                    object: {},
                    array: [],
                    string: undefined,
                    number: undefined,
                    boolean: undefined
                }[type]
            }
        },
        uiSchema: {
            type: Object
        },
        __id__: {
            type: String,
            required: true
        },
        onFormDataChange: {
            type: Function,
            required: true
        }
    }
}

export default fieldPropsInterFace;
