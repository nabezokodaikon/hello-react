"use strict";

import { hoge } from "./sub.js";

hoge();
console.log("hello!!");

import { app, BrowserWindow } from "electron";
import path from "path";
import url from "url";

console.log(__dirname);

let win = null;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL(url.format({
    pathname: path.join(__dirname, "../html/index.html"),
    protocol: "file",
    slashes: true
  }));
  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("active", () => {
  if (win === null) {
    createWindow();
  }
});
