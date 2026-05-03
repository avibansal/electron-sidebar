import { app, BrowserWindow, ipcMain, screen, shell } from 'electron';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let win;
const isDev = !app.isPackaged;

function createWindow() {
  const { width } = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    width: 260,
    height: 120,
    x: width - 130,
    y: 150,
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
    },
  });

  if (isDev) {
    // ✅ DEV → load Vite server
    win.loadURL('http://localhost:5173');
    win.webContents.openDevTools({ mode: 'detach' });
  } else {
    // ✅ PRODUCTION → load built React files
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  win.setIgnoreMouseEvents(true, { forward: true });
}

// IPC
ipcMain.on('set-ignore-mouse', (event, ignore) => {
  if (win) {
    win.setIgnoreMouseEvents(ignore, { forward: true });
  }
});

ipcMain.on('resize', (event, width) => {
  if (win) {
    win.setSize(width, 400); // ⚠️ height must not be 0
  }
});

ipcMain.on('open-url', (event, url) => {
  shell.openExternal(url);
});

// Single instance lock
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) app.quit();

app.whenReady().then(createWindow);