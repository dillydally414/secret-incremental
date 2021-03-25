"use strict"

function save() {
  localStorage.setItem('secretIncrementalSave', JSON.stringify(game))
}

function load(saveData) {
  game = newGame()
  if (saveData != null) {
    for (let thing in game) {
      game[thing]=saveData[thing]
    }
  }
}
