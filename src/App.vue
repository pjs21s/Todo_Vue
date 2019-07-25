<template>
  <div id="app">
    <router-link to="/todos">ToDos</router-link>
    <router-link to="/example">example</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>