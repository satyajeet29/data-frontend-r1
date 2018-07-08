<template>
  <div class="flex-container">
    <div>
      <h3>Join Twitter</h3>
      <h5>Register as a new user</h5>
      <div><input class="textView" type = "text" v-for="item in items" :placeholder="item"></div>
      <router-link :to="{ path: '/loginpageview'}">
        <input class = "linkView" type="link" value="Already have an account?">
      </router-link>
      <input class = 'buttonView' type="button" value="Register"></br>
    </div>
  </div>
</template>

<script>
export default {
 data () {
   return {
     items:["First Name", "Last Name", "your@ mail.com", "username", "password", "retype-password"]
   }
 }
}
</script>

<style scoped>
</style>
