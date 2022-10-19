<template>
    <div v-if="type=='left'" class="sprint_item left fade-in">
        <div class="name">
            <p>
                {{name}}
            </p>
        </div>
        <i class="icon fa fa-cog"></i>
        <div class="content">
            <p>
                {{text}}
            </p>
        </div>
    </div>
    <div v-else class="sprint_item right fade-in">
        <div class="name">
            <p>
                {{name}}
            </p>
        </div>
        <i class="icon fa fa-cog"></i>
        <div class="content">
            <p>
                {{text}}
            </p>
        </div>
    </div>
</template>
  
  
<script>
  
  export default {
    name: "SprintItem",
    props: {
      name: String,
      text: String,
      type: String
    }
  }
</script>

<style scoped>

*,
*::before,
*::after {
  box-sizing: border-box;
}
.sprint_item .name {
  position: absolute;
  display: inline-block;
  top: calc(50% - 20px);
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #001d6e;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
}

.sprint_item.left .name {
  right: -130px;
}

.sprint_item.right .name {
  left: -130px;
}

.sprint_item .icon {
  position: absolute;
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 9px 0;
  top: calc(50% - 20px);
  background: #55f6f6;
  border: 2px solid #001d6e;
  border-radius: 40px;
  text-align: center;
  font-size: 18px;
  color: #001d6e;
  z-index: 1;
}

.sprint_item.left .icon {
  right: 56px;
}

.sprint_item.right .icon {
  left: 56px;
}

.sprint_item .content {
  padding: 30px 90px 30px 30px;
  background: #55f6f6;
  position: relative;
  border-radius: 0 500px 500px 0;
}

.sprint_item.right .content {
  padding: 30px 30px 30px 90px;
  border-radius: 500px 0 0 500px;
}

.sprint_item .content h2 {
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: normal;
  color: #001d6e;
}

.sprint_item .content p {
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
}

.sprint_item.left {
  left: 0;
}

.sprint_item.right {
  left: 50%;
}
.sprint_item{
  padding: 15px 30px;
  position: relative;
  background: inherit;
  width: 50%;
}

.sprint_item.right::after {
  left: -8px;
}
.sprint_item::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: calc(50% - 8px);
  right: -8px;
  background: #001d6e;
  border: 2px solid #001d6e;
  border-radius: 16px;
  z-index: 1;
}

.sprint_item::before {
  content: '';
  position: absolute;
  width: 50px;
  height: 2px;
  top: calc(50% - 1px);
  right: 8px;
  background: #001d6e;
  z-index: 1;
}

.sprint_item.right::before {
  left: 8px;
}
</style>