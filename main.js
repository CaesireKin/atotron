const {app, BrowserWindow} = require('electron');

let hWindow;
function createWindow() {
    hWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    });

    hWindow.loadFile('./app/index.html');

    hWindow.on('closed', () => {
        hWindow = null;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (null === hWindow) { createWindow(); }
});