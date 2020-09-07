<template>
  <div>
      <H1>HI Component Query</H1>
      <hr>
      <div>
        hi => {{ code }}
      </div>
      <div>
        query => {{ $route.query.name}}
      </div>
      <button type="button" class="btn btn-primary" @click="getUser">click get user</button>
      <div>
        List User
      </div>
      <hr>
      <div>
        {{ user }}
      </div>
  </div>
</template>

<script>
import services from '../services/callAPI'
export default {
  data() {
    return {
      code: "hello Query",
      user: []
    }
  },

  methods: {
    getUser() {
      services.getUsers()
        .then(rs => {
            this.user = rs.data
        })
        .then(e => {
          console.log(e)
        })
      
    }
  },
    

}
</script>

<style>

</style>