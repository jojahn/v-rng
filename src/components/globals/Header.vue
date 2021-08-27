<template>
  <div class="header">
    <ul class="nav">
      <li>
        <router-link class="brand" to="/">
          <span>R</span>
          <span>N</span>
          <span>G</span>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/wheel">Wheel</router-link>
      </li>
      <li>
        <router-link class="link" to="/dices">Dices</router-link>
      </li>
      <li>
        <router-link class="link" to="/spinner">Spinner</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  display: block;
  width: 100vw;
  height: 50px;
  text-align: left;
  padding-left: 10px;
  background: white;
  top: 0;
}

.nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
}

.nav > h1 {
  margin: auto;
  padding: 0;
}

ul.nav li .brand {
  display: block;
  padding: 10px;
  text-decoration: none;
  font-size: 2em;
  line-height: 35px;
  color: black;
  margin: 0 10px;
  height: calc(50px - 20px);
  font-weight: bold;
}

.brand span:nth-child(1) {
  color: #f5306b;
}

.brand span:nth-child(2) {
  color: #48b2ed;
}

.brand span:nth-child(3) {
  color: #aae85d;
}

/*     "FDDE3B",
    "48B2ED",
    "F5306B",
    "AAE85D" */

ul.nav li .link {
  display: block;
  padding: 10px;
  text-decoration: none;
  font-size: 1em;
  line-height: 35px;
  color: black;
  margin: 0 10px;
  height: calc(50px - 20px);
}

ul.nav li .link:hover {
  background: #48b2ed;
}

ul.nav li .link.round {
  padding: 10px;
  text-decoration: none;
  font-size: 1em;
  line-height: 50px;
  color: black;
  margin: 0 10px;
}
</style>
