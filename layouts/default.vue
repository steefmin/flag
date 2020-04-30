<template>
  <div id="box">
    <div id="header"></div>
    <nuxt id="main"/>
    <div id="footer">
      <div class="footerElement">
        <a href="https://steefmin.xyz">By MINdustries</a>
      </div>
    </div>
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

body {
  min-height: 100vh;
}

#box {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
}

#main {
  flex: 1;
}

#header {
  background-color: #318582;
  flex-basis: 100px;
  flex-shrink: 0;
}

#footer {
  background-color: #318582;
  flex-basis: 100px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.footerElement {
  margin: 20px;
}
a, a:link, a:visited {
  text-decoration: none;
  color: #fff;
}
</style>
