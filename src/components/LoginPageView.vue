<template>
  <div class="flex-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</template>

<script>
</script>

<style scoped>
  .flex-container {
    display: flex;
      justify-content: center;
      justify-content: space-between;
      background-color: #eef4e8;
      width: 600px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 5px;
  }
  .flex-container > div {
    background-color: #f1f1f1;
    width: 400px;
    margin: 10px;
    background-color: #cc669f;
    color: white;
    text-align: center;
    line-height: 80px;
    font-size: 30px;
    border-radius: 5px;
  }

</style>
