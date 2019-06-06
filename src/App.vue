<template>
    <Form 
      :jsonSchema="jsonSchema"
      :dataSchema="dataSchema" />
</template>

<script>
import { jsonSchema, dataSchema } from "../mockData";
import Form from './Form/Form';

export default {
  name: 'app',
  data() {
    return {
      jsonSchema,
      dataSchema,
    }
  },
  components: {
    Form,
  },
  created() {
    // console.log(typeof this.dataSchema);
  }
}

</script>
