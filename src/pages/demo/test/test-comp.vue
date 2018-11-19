<template>
  <div>{{params.b}}abcdefg{{params.a}}</div>
</template>
<script>
  export default {
    name: 'TestComp',
    props: {
      params: Object
    },
    methods: {}
  }
</script>
