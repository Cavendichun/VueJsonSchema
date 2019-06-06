<template>
  <el-input
    v-model="data"
    clearable />
</template>

<script>
import { Input } from "element-ui";

export default {
  name: 'text-input',
  props: {
    onChange: {
      type: Function,
      require: true,
    },
    __id: {
      type: String,
      require: true,
    }
  },
  data() {
    return {
      data: this.$attrs.defaultData,
    }
  },
  components: {
    'el-input': Input,
  },
  watch: {
    data: function(value) {
      this.handleChange(value);
    }
  },
  methods: {
    handleChange: function(value) {
      this.onChange({value, __id: this.__id});
    }
  }
};
</script>

<style lang="scss" scoped>
</style>