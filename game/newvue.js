"use strict"

function newVue() {
  return new Vue({
    el: "#app",
    data: {
      game: {},
      click: click,
      save: save,
      reset: reset,
      buy: buy,
      getCost: getCost,
      unlocked: unlocked
    }
  })
}