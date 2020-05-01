<template>
  <div id="box">
    <b-navbar class="row" fixed="top" toggleable="md">
      <b-nav pills class="col w-100">
        <b-nav-item  to="/" active><h1>Online vlaggenmast</h1></b-nav-item>
      </b-nav>
      <b-nav pills align="end" class="col">
        <b-nav-item class="m-2" to="/" exact active-class="active">Home</b-nav-item>
        <b-nav-item class="m-2" to="/create"  active-class="active">Maak</b-nav-item>
        <b-nav-item class="m-2" to="/view"  active-class="active">Bekijk</b-nav-item>
      </b-nav>
    </b-navbar>

    <nuxt id="main"/>

    <b-navbar sticky="bottom" toggleable="true">
      <b-nav small align="end" class="w-100">
        <b-nav-item id="bron"> Bron </b-nav-item>

        <b-nav-item href="https://steefmin.xyz"> Door MINdustries </b-nav-item>
      </b-nav>
    </b-navbar>
    <b-popover target="bron" triggers="click" placement="top">
      Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </b-popover>
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

.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
  background-color: var(--info);
  color: #ffffff;
}
.nav-item > .nav-link {
  color: var(--info);
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
