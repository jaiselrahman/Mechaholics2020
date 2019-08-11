<template>
  <nav role="navigation" class="menu">
      <li class="main-icon" key="main" @click="toggle()" ref="menu-bar">
        <div class="container">
          <div class="bar1" />
          <div class="bar2" />
          <div class="bar3" />
        </div>
      </li>
    </nav>
</template>

<script>
export default {
    name: "NavIcon",
    data() {
        return {
            show: false
        }
    },
    methods: {
        toggle() {
            this.$refs["menu-bar"].classList.toggle("change");
            if(this.show) {
                this.$emit('nav-icon', 'close');
            } else {
                this.$emit('nav-icon', 'open'); 
            }
            this.show = !this.show;
        }
    }
}
</script>

<style scoped>

.menu {
  position: fixed;
  top: 0;
  left: 0;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  list-style: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  z-index: 2;
}

.main-icon {
  background: #6f27ad;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
}

.main-icon:active {
  transform: scale(0.9);
}

.main-icon:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.main-icon:active {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  transform: scale(0.95);
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bar1,
.bar2,
.bar3 {
  width: 2rem;
  height: 3px;
  background-color: white;
  margin: 5px 0;
  transition: 300ms;
}

.change .bar1 {
  transform: rotate(-45deg) translate(-5.5px, 6px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  transform: rotate(45deg) translate(-5.5px, -6px);
}

</style>