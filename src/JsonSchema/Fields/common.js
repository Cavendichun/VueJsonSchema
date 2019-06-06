export const props = (type) => {
  return {
    jsonSchema: {
      type: Object,
      require: true,
    },
    dataSchema: {
      type: type,
      default: () => { return (new type) },
    },
    __id: {
      type: String,
      require: true,
    },
    onChange: {
      type: Function,
      require: true,
    }
  }
}