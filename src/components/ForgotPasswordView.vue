<template>
  <div class="flex-container">
    <div>
      <h3>Forgot Password</h3>
      <h5>Enter username to reset password</h5>
      <input type="text" placeholder="username"></br>
      <router-link :to="{ path: '/loginpageview'}">
      <input class = "linkView" type="link" value="Return back">
      </router-link>
      <input class = 'buttonView' type="button" value="Reset"></br>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
</style>
