"use strict"

let game
let app
game = newGame()
app = newVue()

load(JSON.parse(localStorage.getItem("secretIncrementalSave")));

app.$data.game = game

window.setInterval(function() {
  save();
}, 10000);