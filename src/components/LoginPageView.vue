<template>
  <div class="flex-container">
    <div>
      <h3>Welcome to Twitter</h3>
      <h5>Join world today</h5>
      <input class="textView"  type="text" placeholder="username"></br>
      <input class="textView"  type="text" placeholder="password"></br>
      <router-link :to="{ path: '/forgotpasswordview'}">
        <input class="linkView" type="link" value="Forgot password?">
      </router-link>
      <input class = 'buttonView' type="button" value="Log In"></br>
      <!--path to a given page-->
      <router-link :to="{ path: '/registerview'}">
        <input class="linkView" type="link" value="Register for new account?"></br>
      </router-link>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
</style>
