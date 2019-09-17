const HanoiGame = require("./game.js");
const HanoiView = require("./hanoi-view.js");


$(() => {
  // console.log("it works");
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  const view = new HanoiView(game, rootEl);
  // let move = 1;
  $("ul").on("click", e => {
    view.clickTower(e);
  }); 
  
});
