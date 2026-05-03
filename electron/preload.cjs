const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  run: (name) => ipcRenderer.send('run', name),
  resize: (width) => ipcRenderer.send('resize', width),
  send: (channel, data) => ipcRenderer.send(channel, data),
  openURL: (url) => ipcRenderer.send('open-url', url),
});