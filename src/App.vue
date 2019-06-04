<template>
    <Form 
      :jsonSchema="jsonSchema"
      :dataScehma="dataSchema" />
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
  }
}

</script>
