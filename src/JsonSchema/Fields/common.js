export const props = (type) => {
  return {
    jsonSchema: {
      type: Object,
      require: true,
    },
    dataSchema: {
      type: type,
      default: () => { return {} },
    },
    __id: {
      type: String,
      require: true,
    }
  }
}