<template>
  <div>
    <div class="nav ">Navbar here</div>
    <slot />
  </div>
</template>

<style scoped>
.nav {
  border: solid red 1px;
  position: sticky;
  top:0;
}
.test {
  height: 50vh;
}
</style>