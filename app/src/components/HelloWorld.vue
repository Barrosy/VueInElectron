<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    We are using Node.js {{ nodeVersion }},
    Chromium {{ chromeVersion }},
    and Electron {{ electronVersion }}.
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      version: null,
      dependencies: null,
      nodeVersion: null,
      chromeVersion: null,
      electronVersion: null
    }
  },
  async created() {
    if(window.api) {
      //How to send information to Electron Main process:
      window.api.greet("Hello from renderer")

      //How to receive information from Electron Main process:
      this.version = await this.asyncGetVersion()

      //Or call directly:
      this.dependencies = await window.api.getDependencies()

      this.nodeVersion = this.dependencies["node-version"]
      this.chromeVersion = this.dependencies["chrome-version"]
      this.electronVersion = this.dependencies["electron-version"]
    }
  },
  methods: {
    async asyncGetVersion() {
      //Electron Preload process (located in preload.js) defines method called below:
      return await window.api.getVersion()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
