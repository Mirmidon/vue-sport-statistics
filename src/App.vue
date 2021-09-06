<template>
  <div id="nav">
    <router-link to="/">Home</router-link><br>
    <router-link to="/championship">Championship</router-link><br>
    <router-link to="/teams">Teams</router-link><br>
    <router-link to="/calendar">Calendar</router-link><br>
    <router-link to="/seasons">Team seasons</router-link><br>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 40px;
  line-height: 2;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
img {
  width: 27rem;
  height: 20rem;
  border-radius: 3rem;
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
input {
margin-bottom: 10px;
    width: 393px;
}
</style>
