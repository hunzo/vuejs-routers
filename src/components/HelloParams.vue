<template>
  <div>
      <H1>HI Component CODE1</H1>
      <hr>
      <div>
        hi => {{ code }}
      </div>
      <div>
        param => {{ $route.params.id}}
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: "hello CODE"
    }
  },
    

}
</script>

<style>

</style>