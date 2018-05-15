<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">CropChat</span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">CropChat</span>
      <nav class="mdl-navigation">
        <router-link id="home" class="mdl-navigation__link" to="/">Home</router-link>
        <router-link class="mdl-navigation__link" to="/post">Post a picture</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
require('material-design-lite')
export default {
  name: 'app',
  mounted () {
    var mdl = document.getElementsByClassName('mdl-navigation__link')
    for (let i = 0; i < mdl.length; i++) {
      mdl[i].addEventListener('click', function () {
        document.querySelector('.mdl-layout__drawer').classList.remove('is-visible')
        document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible')
      })
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
</style>
