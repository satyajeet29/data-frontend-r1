<template>
  <div class="flex-container">
    <div>
      <h3>Welcome to Twitter</h3>
      <h5>Join world today</h5>
      <h5>{{message}}</h5>
      <h5>{{ info }}</h5>
      <input class="textView"  type="text" placeholder="username" v-model = "user.username"></br>
      <input class="textView"  type="password" placeholder="password" v-model = "user.password"></br>
      <router-link :to="{ path: '/forgotpasswordview'}">
        <input class="linkView" type="link" value="Forgot password?">
      </router-link>
        <input class = 'buttonView' type="button" value="Log In" v-on:click= "loginSubmit()"></br>
      <!--path to a given page-->
      <router-link :to="{ path: '/registerview'}">
        <input class="linkView" type="link" value="Register for new account?"></br>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      //String to return welcome message
      message:"",
      user: {
        username: "",
        password: ""
      }
    }
  },

  methods: {
    loginSubmit() {
      //declaring a variable to extract values from PHP response
      var returnObject = {};
        // Check#1:  if username entered is not empty
        if (this.user.username.length == 0)
        {
            console.log("Enter username, it cannnot be empty");
            this.$router.push('/loginerror');
        }
        //Check#2: if password entered is not empty
        else if (this.user.password.length == 0) {
          console.log("Enter password, it cannnot be empty");
          this.$router.push('/loginerror');
        }
        //Check#3: send parameters to php url login.php and then evaluate
        else
        {
          //send parameters to url login.php
          let xhr = new XMLHttpRequest();
          let url  = "https://cors.io/?http://52.89.123.54/Twitter/login.php?username="+this.user.username+"&password="+this.user.password;
          xhr.open('GET',url, true);
          xhr.send();
          xhr.onreadystatechange = processRequest;
          function processRequest(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
              try{
                  //logging response obtained from php file
                   var response = JSON.parse(xhr.responseText);
                   this.returnObject = response;
                   //upon succesful verification of credentials i am trying to navigate to HomePage
                      if (response["message"] == "Logged in succesfully") {
                          this.$router.push('/homepage');
                      }
                   console.log(typeof response);
                   return JSON.stringify(this.returnObject);
                }
                //logging error obtained from the response back from php file
                catch (e){
                  console.log("error line: ");
                  console.log(e);
                }
              }
            }
            //end of function processRequest
            console.log(typeof this.returnObject);
            //console.log(Object.keys(this.returnObject));
            console.log(JSON.stringify(this.returnObject));
          }
        }//end of login submit method
      }
      //end of methods
}
</script>

<style scoped>
</style>
