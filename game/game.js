"use strict"

function click() {
  for (let i = 0; i <= 8; i++) {
    game.content[i] += game.content[i + 1]
  }
  for (let i = 0; i <= 8; i++) {
    Vue.set(app.$data.game.content, i, game.content[i])
  }
}

function reset() {
  if (confirm("Are you sure you want to erase your progress?")) {
    game = newGame()
    save()
    location.reload()
  }
}

function buy(x) {
  let cost = getCost(x)
  if (x <= 9 && game.content[x - 1] >= cost) {
    game.content[x - 1] -= cost
    game.content[x]++
    save()
    Vue.set(app.$data.game.content, x, game.content[x])
    Vue.set(app.$data.game.content, x - 1, game.content[x - 1])
  } else if (x == 10 && game.content[9] >= cost) {
    game.content[10] = true
    Vue.set(app.$data.game.content, 10, game.content[10])
  }
}

function getCost(x) {
  switch (x) {
    case 1:
      return Math.max(Math.max(game.content[0], Math.pow(game.content[1], 2)), 1)
    case 2:
      return Math.ceil(Math.sqrt(Math.max(game.content[0], 1)))
    case 3:
      return Math.max(Math.ceil(Math.random() * game.content[2] * 5), 1);
    case 4:
      return Math.max(game.content[0], 1);
    case 5:
      return Math.ceil(Math.abs(Math.sin(game.content[0] + Math.PI)) * game.content[4] + 1);
    case 6:
      return 5;
    case 7:
      return Math.max(Math.clz32(game.content[0]), 1);
    case 8:
      return Math.ceil(Math.sqrt(Math.sqrt(Math.sqrt(game.content[0]))));
    case 9:
      return Math.ceil(Math.random() * 10);
    case 10:
      return 50;
  }
}

function unlocked(x) {
  switch (x) {
    case 0:
      return !game.content[10]
    case 1:
      return game.content[0] >= 1 || game.content[1] >= 2 || unlocked(x + 1)
    case 2:
      return game.content[1] >= 10 || game.content[2] >= 1 || unlocked(x + 1)
    case 3:
      return game.content[2] >= 50 || game.content[3] >= 1 || unlocked(x + 1)
    case 4:
      return game.content[3] >= 50 || game.content[4] >= 1 || unlocked(x + 1)
    case 5:
      return game.content[4] >= 10 || game.content[5] >= 1 || unlocked(x + 1)
    case 6:
      return game.content[5] >= 100 || game.content[6] >= 1 || unlocked(x + 1)
    case 7:
      return game.content[6] >= 100 || game.content[7] >= 1 || unlocked(x + 1)
    case 8:
      return game.content[7] >= 100 || game.content[8] >= 1 || unlocked(x + 1)
    case 9:
      return game.content[8] >= 10 || game.content[9] >= 1 || unlocked(x + 1)
    case 10:
      return game.content[9] >= 10
  }
}