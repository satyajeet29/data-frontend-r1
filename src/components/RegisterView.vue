<template>
  <div class="flex-container">
    <div>
      <h3>Join Twitter</h3>
      <h5>Register as a new user</h5>
      <input type="text" placeholder="First Name"></br>
      <input type="text" placeholder="Last Name"></br>
      <input type="text" placeholder="your@mail.com"></br>
      <input type="text" placeholder="username"></br>
      <input type="text" placeholder="password"></br>
      <input type="text" placeholder="retype-password"></br>
      <router-link :to="{ path: '/loginpageview'}">
        <input class = "linkView" type="link" value="Already have an account?">
      </router-link>
      <input class = 'buttonView' type="button" value="Register"></br>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
</style>
