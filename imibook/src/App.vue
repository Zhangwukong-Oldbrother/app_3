<template>
  <div id='app'>
    <div id='nav'>
      <div>
        <span class='icon-cart'></span>
      </div>
      <div class='text'>aaaaaaaaa</div>
      <router-link to='/'>Home</router-link>|
      <router-link to='/about'>About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['name'])
  },
  mounted () {
    this.$store.dispatch('setName', 10).then(() => {
      console.log(this.name)
    })
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>

<style lang="scss" scoped>
@import './assets/styles/global.scss';
.text {
  font-size: px2rem(20);
  font-family: 'Arial';
}
</style>
