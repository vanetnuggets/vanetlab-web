<template>
    <div class="sprint_item fade-in" :class="type" >
        <div class="date" :class="type">
            <p>
              {{date}}
            </p>
        </div>
        <i class="icon fa fa-cog">
          <car class="smol" :class="type" />
        </i>
        <div class="content" :class="type">
          <h2 :class="type">
            {{name}}
          </h2>
          <p :class="type">
            {{text}}
          </p>
        </div>
    </div>
</template>
  
  
<script>
  import Car from "./Car.vue"
  export default {
    name: "SprintItem",
    components: {
      Car
    },
    mounted() {
      console.log(this.type)
    },
    props: {
      date: String,
      name: String,
      text: String,
      type: String
    },
    computed: {
      get_theme() {
        return this.$store.getters.theme
      }
    }
  }
</script>

<style scoped lang="scss">

.smol {
  scale: 0.3;
  position: inherit;
  margin-left: 0px;
  margin-top: 0px;

  &.left {
    margin-left: 38px;
    margin-top: 16px;
    transform:rotate(135deg);
  }

  &.right {
    margin-left: 22px;
    margin-top: -5px;
    transform:rotate(45deg);

  }
}

// *,
// *::before,
// *::after {
//   box-sizing: border-box;
// }

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

    &.samo {
      color: var(--samo_text);
    }
  }

  .icon {
    position: absolute;
    display: inline-block;
    width: 40px;
    height: 40px;
    padding: 4px 0;
    top: calc(50% - 20px);
    background: transparent;
    //border: 2px solid #001d6e;
    border-radius: 40px;
    text-align: center;
    font-size: 18px;
    color: #001d6e;
    z-index: 1;
    //box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .content {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background: rgba(255,255,255,0.4);
    position: relative;

    &.samo {
      background: rgba(255,255,255,0.1);
    }

    h2 {
      margin: 0 0 10px 0;
      font-size: 18px;
      font-weight: normal;
      color: #001d6e;
      &.samo {
        color: var(--samo_title2);
      }
    }
    p {
      margin: 0;
      font-size: 16px;
      line-height: 22px;
      color: #000000;
      opacity: 1;

      &.samo {
        color: var(--samo_text);
      }
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
    .content {
      border-radius: 0 500px 500px 0;
      padding: 10px 90px 10px 30px;
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
      padding: 10px 30px 10px 90px;
      border-radius: 500px 0 0 500px;
    }
    .icon {
      left: 56px;
    }
  }
  &.samo {
    &::after {
      background: var(--samo_sprint_line);
      border: 2px solid var(--samo_sprint_line);
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
    &.samo {
      background: red;
    }
  }

  &.samo {
    &::before {
      background: var(--samo_sprint_line);
    }
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