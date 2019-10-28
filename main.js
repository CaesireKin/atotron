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

    hWindow.on('closed', () => {
        hWindow = null;
    });

    // TODO: 加入更新检测

    hWindow.loadFile('./app/index.html');
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
