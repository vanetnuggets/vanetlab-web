<template>
    <div class="sprint_item fade-in" :class="type">
        <div class="date">
            <p>
              {{date}}
            </p>
        </div>
        <i class="icon fa fa-cog"></i>
        <div class="content">
          <h2>
            {{name}}
          </h2>
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
      date: String,
      name: String,
      text: String,
      type: String
    }
  }
</script>

<style scoped lang="scss">

*,
*::before,
*::after {
  box-sizing: border-box;
}

.sprint_item {
  padding: 15px 30px;
  position: relative;
  background: inherit;
  width: 50%;

  .date {
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

  .icon {
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

  .content {
    padding: 30px 90px 30px 30px;
    background: #55f6f6;
    position: relative;
    border-radius: 0 500px 500px 0;

    h2 {
      margin: 0 0 10px 0;
      font-size: 18px;
      font-weight: normal;
      color: #001d6e;
    }
    p {
      margin: 0;
      font-size: 16px;
      line-height: 22px;
      color: #000000;
    }
  } 

  &.left {
    left: 0;
    .date {
      right: -130px;
    }
    .icon {
      right: 56px;
    }
  }

  &.right {
    left: 50%;
    .date {
      left: -130px;
    }
    &::after {
      left: -8px;
    }
    &::before {
      left: 8px;
    }
    .content {
      padding: 30px 30px 30px 90px;
      border-radius: 500px 0 0 500px;
    }
    .icon {
      left: 56px;
    }
  }

  &::after {
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
  
  &::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 2px;
    top: calc(50% - 1px);
    right: 8px;
    background: #001d6e;
    z-index: 1;
  }
}

</style>