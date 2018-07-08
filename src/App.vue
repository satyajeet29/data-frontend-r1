<template>
  <div id="app">
    <!--img src="./assets/logo.png"-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url("../static/styles/myStyle.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 175px;
}
/*
.flex-container {
    flex-direction: column;
    background-color: #fafafa;
    width: 340px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 10px;
}
.flex-container > div > input[type=text]{
    width: 300px;
    height: 20px;
}
.buttonView{
    width: 70px;
    height: 25px;
    outline: none;
    color: white;
    font-size: 15px;
    margin: 5px 1px 3px 0px;
    border: none;
    border-radius: 20px;
    background-color: rgb(0,225,255);
    float:right;
    cursor: pointer;
}
.buttonView:focus{
    border: 1px solid #DDDDDD;
    background-color: rgb(0,125,255);
    cursor: pointer;
}
.linkView{
    width:  180px;
    height: 15px;
    border: 0px;
    outline: none;
    font-size: 12px;
    font-weight: bold;
    text-decoration: underline;
    color:  rgb(54,54,54);
    float:  left;
    padding-top: 10px;
    padding-left: 10px;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
}
.flex-container > div > input[type=text], textarea {
  @include transition(all 0.30s ease-in-out);
    outline: none;
    font-size: 15px;
    padding: 3px 0px 5px 10px;
    margin: 5px 1px 3px 0px;
    border: 1px solid #DDDDDD;
    border-radius: 20px;
}
.flex-container > div > input[type=text]:focus, textarea:focus {
  @include box-shadow(0 0 5px rgba(81, 203, 238, 1));
    padding: 3px 0px 5px 10px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(81, 203, 238, 1);
}
*/
</style>
