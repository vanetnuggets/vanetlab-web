<template>
    <div v-if="type=='left'" class="sprint_item left fade-in">
        <div class="name">
            <p>
                {{name}}
            </p>
        </div>
        <div class="info">
            <p>
                {{text}}
            </p>
        </div>
    </div>
    <div v-else class="sprint_item right fade-in">
        <div class="info">
            <p>
                {{text}}
            </p>
        </div>
        <div class="name">
            <p>
                {{name}}
            </p>
        </div>
    </div>
</template>
  
  
<script>
  
  export default {
    name: "SprintkItem",
    props: {
      name: String,
      text: String,
      type: String
    }
  }
</script>

<style scoped>
.left .name{
    width: 25%;
    height: 80px;
    border: 1px solid black;
    border-radius: 50%;
    float: left;
    margin-right: 50px;
}

.left .info{
    margin: 0 auto;
    width: 50%;
    height: 80px;
    border: 1px solid black;
}

.right .name{
    margin: 0 auto;
    width: 25%;
    height: 80px;
    border: 1px solid black;
    border-radius: 50%;
}

.right .info{
    width: 50%;
    height: 80px;
    border: 1px solid black;
    float: left;
    margin-right: 50px;
}

.left {
    margin-left: 20%;
}

.right {
    margin-right: 20%;
}
.sprint_item{
    width: 90%;
    margin-top: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    text-align: center;
    display: flex;
}
</style>