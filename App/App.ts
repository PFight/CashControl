﻿import { Main } from "./Main/Main";
import { Alina } from "./Imports";

class App {
  initialize() {
    this.bindEvents();
  }
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  }
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'app.receivedEvent(...);'
  onDeviceReady() {
    Alina.Renderer.Main.query("#app").mount(Main).render();
  }
};

let app = new App();
//app.initialize();
app.onDeviceReady();
