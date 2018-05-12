const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
const ipc = electron.ipcMain;


// when ready fire up Chromium

app.on('ready', () => {
  let appWindow, infoWindow;
  appWindow = new BrowserWindow({
    show: false
  });

appWindow.loadURL('http://electronjs.org');

// size the 2nd infoWindow

  infoWindow = new BrowserWindow({
    width: 500,
    height: 500,
    show: false
  });

// use node __dirname to pull in path format

  infoWindow.loadURL('file://' + __dirname + '/info.html');

 appWindow.once('ready-to-show', () => {
   appWindow.show();
   setTimeout( () =>  {

     infoWindow.show();
     // setTimeout( () => {
     // infoWindow.hide()
     // infoWindow.close()
     // }, 3000);

   }, 1000);

 }) //ready-to-show

//close handler uses ipc

 ipc.on('closeInfoWindow', (event, arg) => {
   event.returnValue='';
   infoWindow.hide();
   infoWindow.close();
 })

});
