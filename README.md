[![Discord](https://img.shields.io/discord/129301308883730432.svg?color=7289da&label=Discord&logo=discord&style=flat-square)](https://discord.gg/0imKLxQ9nffTVfG2) 

# VueInElectron
A sample repository for [Vue](https://vuejs.org/guide/introduction.html) framework in [Electron](https://www.electronjs.org/docs/latest/). 

This repository uses [Vue](https://v2.vuejs.org/v2/guide/) version 2.7.14 \(available on [NPM](https://www.npmjs.com/package/vue/v/2.7.14), the latest version of Vue is available on [Gitlab](https://github.com/vuejs/core)\).

The specified Vue version is the latest version compatible with [Electron Builder](https://github.com/nklayman/vue-cli-plugin-electron-builder) \(or check [full documentation here](https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/guide.html)\).

[Vue Router 3](https://v3.router.vuejs.org/) \([Gitlab](https://github.com/vuejs/vue-router)\) is the latest version available to provided specified Vue version.

In order to replicate, make sure to run [Vue CLI](https://cli.vuejs.org/) command `vue create app-name` and select Default \(\[Vue 2\] babel, esLint\).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and hot-reloads for development using Electron
```
npm run electron:serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Inter Process Communication
See [IPC Reference](https://github.com/nklayman/vue-cli-plugin-electron-builder/discussions/1903)