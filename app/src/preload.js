const { ipcRenderer, contextBridge } = require("electron")

/*
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})
*/

let dependencies = {}

for (const dependency of ['chrome', 'node', 'electron']) {
    dependencies[`${dependency}-version`] = process.versions[dependency]
}

//Communication between renderer process and main process:
contextBridge.exposeInMainWorld("api", {
    greet: (message) => ipcRenderer.send("greet", message),
    getVersion: () => ipcRenderer.invoke("version"),
    getDependencies: async () => { return dependencies }
})