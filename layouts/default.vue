<template>
  <div id="box">
    <b-navbar fixed="top">
      <b-nav pills>
        <b-nav-item to="/" active><h1>Online vlaggenmast</h1></b-nav-item>
      </b-nav>
      <b-nav pills align="end">
        <b-nav-item to="/" exact active-class="active">Home</b-nav-item>
        <b-nav-item to="/create"  active-class="active">Maak</b-nav-item>
        <b-nav-item to="/view"  active-class="active">Bekijk</b-nav-item>
      </b-nav>
    </b-navbar>

    <nuxt id="main"/>

    <b-navbar fixed="bottom" toggleable="true">
      <b-nav small align="end">
        <b-nav-item href="https://steefmin.xyz">Door MINdustries</b-nav-item>
      </b-nav>
    </b-navbar>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

* {
  margin: 0;
}

.nav {
  width: 100%
}

.nav-item {
  margin: 4px;
}

.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
  background-color: var(--info);
  color: #ffffff;
}
.nav-item > .nav-link {
  color: var(--info);
}
</style>
