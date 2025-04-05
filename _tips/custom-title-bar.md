---
layout: tip
title: Custom ElectronJs app title bar
excerpt: |
  A custom title bar not only enhances your app's aesthetics but also provides better control over window management. In this guide, we'll walk you through creating a custom title bar in Electron.js—complete with draggable regions, minimize/maximize/close buttons, and seamless integration with your app's UI.
thumbnail: "assets/images/tips/electron-titlebar.png"
tags:
  - Electronjs
  - Tutorial
---

In this guide, we’ll walk through the steps to create a sleek, functional custom title bar in Electron.js—complete with window controls (minimize, maximize, close) and a draggable area. Let’s dive in!

## Remove the default title bar

{% highlight js %}

const { app, BrowserWindow } = require('electron')

function createWindow () {
const win = new BrowserWindow({
// remove the default titlebar
titleBarStyle: 'hidden'
})
win.loadURL('https://example.com')
}

app.whenReady().then(() => {
createWindow()
})

{% endhighlight %}

## Add native window controls

{% highlight js %}

const { app, BrowserWindow } = require('electron')

function createWindow () {
const win = new BrowserWindow({
// remove the default titlebar
titleBarStyle: 'hidden',
// expose window controlls in Windows/Linux
...(process.platform !== 'darwin' ? { titleBarOverlay: true } : {})
})
win.loadFile('index.html')
}

app.whenReady().then(() => {
createWindow()
})

{% endhighlight %}

## Create a custom title bar

{% highlight html %}

<div id="titlebar">My cool titlebar</div>
{% endhighlight %}

the application needs to tell Electron which regions are draggable. We’ll do this by adding the CSS style app-region: drag to the custom title bar

{% highlight css %}

body {
margin: 0;
}
.titlebar {
height: 30px;
background: blue;
color: white;
display: flex;
justify-content: center;
align-items: center;
app-region: drag;
}
{% endhighlight %}
