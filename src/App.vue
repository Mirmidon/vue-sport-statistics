<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/championship">Championship</router-link> |
    <router-link to="/teams">Teams</router-link> |
    <router-link to="/calendar">Calendar</router-link> |
    <router-link to="/seasons">Team seasons</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
table {
  font-size: 14px;
  border-collapse: collapse;
  text-align: center;
  margin: 0 auto;
}
th, td:first-child {
  background: #AFCDE7;
  color: white;
  padding: 10px 20px;
}
th, td {
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
}
td {
  background: #D8E6F3;
}
th:first-child, td:first-child {
  text-align: left;
}

</style>
