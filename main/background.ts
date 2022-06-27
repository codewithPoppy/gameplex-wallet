import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import Store from 'electron-store';
import { createWindow } from './helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  // We cannot require the screen module until the app is ready.
  const electron = require('electron')

  // Create a window that fills the screen's available work area.
  const primaryDisplay = electron.screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize

  console.debug(`Creating window with size ${width} x ${height}`)

  const mainWindow = createWindow('main', {
    width: Math.round(width * 0.8),
    height: Math.round(height * 0.8),
  });

//   // Modify the origin for all requests to the following urls.
//   const filter = {
//     urls: []
//   };
//   const session = electron.session
//   session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
//     details.requestHeaders['Origin'] = null;
//     callback({ requestHeaders: details.requestHeaders })
// });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});

// Store Address Book Addresss

const store = new Store({
  encryptionKey: 'todo-app-encryption-key'
});

// Store Network Selections
ipcMain.on('get-network', (event, arg) => {
  event.returnValue = store.get('network', 'mainnet-beta');
});

ipcMain.on('set-network', (event, arg) => {
  store.set('network', arg);
});

ipcMain.on('delete-network', (event, arg) => {
  store.delete('network');
});

// Store Address Book Addresss

ipcMain.on('get-addresses', (event, arg) => {
  event.returnValue = store.get('address', []);
});

type addAddressProps = {
  address: string,
  label: string
}

ipcMain.on('add-address', (event, arg: addAddressProps) => {
  store.set(`address.${arg.address}`, arg.label);
});

ipcMain.on('delete-address', (event, address: string) => {
  store.delete(`address.${address}`);
});
